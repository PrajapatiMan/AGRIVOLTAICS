/**
 * Hourly solar and crop optimization data.
 */
export interface HourlyOptimizationData {
  hour: string;
  solarKWh: number;
  solarRevenue: number;
  cropPAR: number;
  targetPAR: number;
  heatStressRisk: boolean;
  shadePercentage: number;
}

/**
 * Irrigation schedule for an individual farm zone.
 */
export interface ZoneSchedule {
  zoneId: string;
  zoneName: string;

  /** Shade ratio from 0 (no shade) to 1 (100% shade). */
  shadeRatio: number;

  baseWaterVolumeLiters: number;
  calculatedWaterVolumeLiters: number;
  valveRuntimeMinutes: number;
  waterSavingsPercent: number;

  manualOverride: boolean;
  soilMoisturePercent: number;
}

/**
 * Economic results of the co-optimization strategy.
 */
export interface CoOptStrategy {
  /** Strategy weight from 0 (agriculture priority) to 100 (PV priority). */
  strategyWeight: number;

  dailySolarRevenue: number;
  dailyCropValue: number;
  heatPenalty: number;
  netGainDollars: number;

  pvPriorityPercent: number;
  agriPriorityPercent: number;
}

export type Percentage = number;
export type Ratio = number;

/**
 * Hourly solar and crop optimization data.
 */
export interface HourlyOptimizationData {
  hour: string;
  solarKWh: number;
  solarRevenue: number;
  cropPAR: number;
  targetPAR: number;
  heatStressRisk: boolean;
  shadePercentage: Percentage;
}

export interface ZoneSchedule {
  zoneId: string;
  zoneName: string;
  shadeRatio: Ratio;
  baseWaterVolumeLiters: number;
  calculatedWaterVolumeLiters: number;
  valveRuntimeMinutes: number;
  waterSavingsPercent: Percentage;
  manualOverride: boolean;
  soilMoisturePercent: Percentage;
}
