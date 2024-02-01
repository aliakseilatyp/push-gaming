import { ContentJackpotAudit } from 'types/JackpotAuditInterface';

export const jackpotAuditData: ContentJackpotAudit[] = Array.from({ length: 100 }, (_, i) => ({
  entity: {
    config: {
      baseCurrency: 'EUR',
      contribution: {
        amount: 0.9,
        operatorPct: 0,
        playerPct: 100,
        type: 'fixed',
      },
      exchangeRates: {
        currencies: {
          EUR: {
            enabled: true,
            multiplier: 1,
          },
        },
        type: 'fixed',
      },
      houseEdge: 70,
      integrations: {
        leovegas: {
          enabled: true,
          games: {
            'fatrabbit1-*': {
              enabled: true,
            },
            'wildswarm-*': {
              enabled: true,
            },
          },
          igpCodes: {
            '*': {
              enabled: true,
            },
          },
        },
      },
      minWager: 1,
      schedule: {
        iterations: 10,
        startAt: '2023-01-01T00:00:00Z',
      },
      tiers: {
        'daily-drop': {
          contributionPct: 100,
          minContribution: 0,
          reseedPct: 0,
          seedAmount: 10000,
          trigger: {
            dropAt: '0 20 * * * *',
            type: 'time-fixed',
          },
        },
      },
    },
    configSchemaId: 'jackpot-default',
    createdAt: '2023-01-01T00:00:00Z',
    jackpotId: `jackpotId${i}`,
    modifiedAt: '2023-01-01T00:00:00Z',
    status: 'NEW',
    tierInstanceConfigSchemaId: 'jackpot-tier-instance-default',
    updateConfigSchemaId: 'jackpot-update-default',
  },
  metadata: {
    delegate: {
      id: 152,
      revisionDate: '2023-01-01T00:00:00Z',
      timestamp: 1689488940653,
    },
    requiredRevisionInstant: '2023-01-01T00:00:00Z',
    requiredRevisionNumber: 152,
    revisionDate: '2023-01-01T00:00:00Z',
    revisionInstant: '2023-01-01T00:00:00Z',
    revisionNumber: 152,
    revisionType: 'INSERT',
  },
  requiredRevisionInstant: '2023-01-01T00:00:00Z',
  requiredRevisionNumber: 152,
  revisionInstant: '2023-01-01T00:00:00Z',
  revisionNumber: 152,
}));
