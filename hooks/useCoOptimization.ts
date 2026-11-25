import { useState, useMemo } from 'react';
import { HourlyOptimizationData, CoOptStrategy } from '@/types/analytics';
import { FarmConfig } from '@/types/agrivoltaics';
import { CROP_PROFILES } from '@/lib/cropData';

export function useCoOptimization(
  hourlyData: HourlyOptimizationData[],
  config: FarmConfig
) {
  // 0 = 100% Agri Priority, 100 = 100% PV Priority
  const [strategyWeight, setStrategyWeight] = useState(50);

  const optimization = useMemo<CoOptStrategy>(() => {
    const cropProfile = CROP_PROFILES[config.cropType];

    // Calculate all hourly metrics in a single pass
    const {
      dailySolarRevenue,
      totalPAR,
      targetPARSum,
      heatStressHoursCount,
    } = hourlyData.reduce(
      (acc, hour) => {
        acc.dailySolarRevenue += hour.solarRevenue;
        acc.totalPAR += hour.cropPAR;
        acc.targetPARSum += hour.targetPAR;

        if (hour.heatStressRisk) {
          acc.heatStressHoursCount++;
        }

        return acc;
      },
      {
        dailySolarRevenue: 0,
        totalPAR: 0,
        targetPARSum: 0,
        heatStressHoursCount: 0,
      }
    );

    // Calculate crop value based on PAR coverage
    const parRatio = Math.min(
      1.2,
      totalPAR / (targetPARSum || 1)
    );

    const baseDailyCropValue = cropProfile
      ? cropProfile.baseWaterReqLiters * 1.85
      : 250;

    const dailyCropValue = Math.round(
      baseDailyCropValue * parRatio * 100
    ) / 100;

    // Calculate heat stress penalty
    const heatPenalty = Math.round(
      heatStressHoursCount * 14.5 * 100
    ) / 100;

    // Calculate strategy weights
    const w = strategyWeight / 100;

    const pvPriorityPercent = strategyWeight;
    const agriPriorityPercent = 100 - strategyWeight;

    // Calculate projected daily net gain
    const netGainDollars = Math.round(
      (
        dailySolarRevenue * w +
        dailyCropValue * (1 - w) -
        heatPenalty * (1 - w * 0.5)
      ) * 100
    ) / 100;

    return {
      strategyWeight,
      dailySolarRevenue: Math.round(dailySolarRevenue * 100) / 100,
      dailyCropValue,
      heatPenalty,
      netGainDollars,
      pvPriorityPercent,
      agriPriorityPercent,
    };
  }, [hourlyData, config.cropType, strategyWeight]);

  return {
    strategyWeight,
    setStrategyWeight,
    optimization,
  };
}
