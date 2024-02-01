import { ContentTierInstance } from 'types/TierInstanceInterface';

export const tierInstanceAuditMockData: ContentTierInstance[] = Array.from({ length: 100 }, (_, i) => ({
  entity: {
    config: {
      exchangeRates: {
        currencies: {
          EUR: {
            enabled: true,
            multiplier: 1,
          },
        },
        type: 'fixed',
      },
    },
    createdAt: '2023-07-16T07:14:04.969954Z',
    instanceId: 13,
    jackpotId: `jackpotId${i}`,
    modifiedAt: '2023-07-16T07:14:04.969982Z',
    status: 'ACTIVE',
    tierId: 'daily-drop',
  },
  metadata: {
    delegate: {
      id: 203,
      revisionDate: '2023-07-16T08:14:04+0100',
      timestamp: 1689491644975,
    },
    requiredRevisionInstant: '2023-07-16T07:14:04.975Z',
    requiredRevisionNumber: 203,
    revisionDate: '2023-07-16T07:14:04.975',
    revisionInstant: '2023-07-16T07:14:04.975Z',
    revisionNumber: 203,
    revisionType: 'INSERT',
  },
  requiredRevisionInstant: '2023-07-16T07:14:04.975Z',
  requiredRevisionNumber: 203,
  revisionInstant: '2023-07-16T07:14:04.975Z',
  revisionNumber: 203,
}));
