import { ContentJackpots  } from '../types/JackpotsInterface';


export const JackpotsData: ContentJackpots[] = Array.from({ length: 100 }, (_, i) => ({
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
        USD: {
          enabled: false,
          multiplier: 2,
        },
      },
      type: 'fixed',
    },
    houseEdge: 70,
    integrations: {
      'leovegas': {
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
      'pushGaming': {
        enabled: true,
        games: {
          'fatrabbit1-*': {
            enabled: true,
          },
          'wildswarm-*': {
            enabled: true,
          },
          'CS': {
            enabled: false,
          },
        },
        igpCodes: {
          '*': {
            enabled: true,
          },
        },
      },
      'dota2': {
        enabled: true,
        games: {
          'fatrabbit1-*': {
            enabled: true,
          },
          'wildswarm-*': {
            enabled: true,
          },
          'CS': {
            enabled: false,
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
      'monthly-drop': {
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
  status: `${i % 3 == 0 ? 'ACTIVE' : i % 2 == 0 ? 'NEW' : 'FINISHED'}`,
  tierInstanceConfigSchemaId: 'jackpot-tier-instance-default',
  updateConfigSchemaId: 'jackpot-update-default',
}));
