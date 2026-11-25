import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { FarmConfig, CropType } from '@/types/agrivoltaics';
import { CROP_PROFILES } from '@/lib/cropData';

interface FarmConfigState {
  config: FarmConfig;

  updateConfig: <K extends keyof FarmConfig>(
    key: K,
    value: FarmConfig[K]
  ) => void;

  setCropType: (crop: CropType) => void;

  resetToDefaults: () => void;
}

const DEFAULT_CONFIG: FarmConfig = {
  latitude: 37.7749,
  longitude: -122.4194,
  panelHeight: 2.5,
  panelTilt: 25,
  rowPitch: 4.5,
  cropType: 'lettuce',
  targetDLI: 14,
};

const STORAGE_NAME = 'agrivoltaics-farm-config-v1';

export const useFarmConfig = create<FarmConfigState>()(
  persist(
    (set) => ({
      config: DEFAULT_CONFIG,

      updateConfig: (key, value) =>
        set((state) => {
          if (Object.is(state.config[key], value)) {
            return state;
          }

          return {
            config: {
              ...state.config,
              [key]: value,
            },
          };
        }),

      setCropType: (crop) =>
        set((state) => {
          if (state.config.cropType === crop) {
            return state;
          }

          const cropProfile = CROP_PROFILES[crop];

          return {
            config: {
              ...state.config,
              cropType: crop,
              targetDLI:
                cropProfile?.targetDLI ?? state.config.targetDLI,
            },
          };
        }),

      resetToDefaults: () =>
        set((state) => {
          const isAlreadyDefault = Object.keys(DEFAULT_CONFIG).every(
            (key) =>
              Object.is(
                state.config[key as keyof FarmConfig],
                DEFAULT_CONFIG[key as keyof FarmConfig]
              )
          );

          return isAlreadyDefault
            ? state
            : { config: { ...DEFAULT_CONFIG } };
        }),
    }),
    {
      name: STORAGE_NAME,
      storage: createJSONStorage(() => localStorage),
      version: 1,
      partialize: (state) => ({
        config: state.config,
      }),
    }
  )
);
