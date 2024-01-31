import { ContentJackpotTierInstance } from 'types/JackpotTierInstanceInterface';

export const JackpotTierInstanceData: ContentJackpotTierInstance[] = Array.from({ length: 100 }, (_, i) => ({
  config: {
    exchangeRates: {
      currencies: {
        EUR: {
          enabled: true,
          multiplier: 1,
        },
        GBP: {
          enabled: true,
          multiplier: 1,
        },
      },
      type: 'fixed',
    },
  },
  createdAt: '2023-01-01T00:00:00Z',
  instanceId: i,
  jackpotId: `jackpotId${i}`,
  modifiedAt: '2023-01-01T00:00:00Z',
  status: `${i % 3 == 0 ? 'ACTIVE' : i % 2 == 0 ? 'VOIDED' : 'FINISHED'}`,
  tierId: 'daily-drop',
}));
