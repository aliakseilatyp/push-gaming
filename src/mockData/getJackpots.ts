import { Content, JackpotsInterface } from '../types/JackpotsInterface';

export const getJackpots = (): JackpotsInterface => {
  return {
    content: [
      {
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
        jackpotId: 'jackpotId',
        modifiedAt: '2023-01-01T00:00:00Z',
        status: 'NEW',
        tierInstanceConfigSchemaId: 'jackpot-tier-instance-default',
        updateConfigSchemaId: 'jackpot-update-default',
      },
      {
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
        jackpotId: 'jackpotId1',
        modifiedAt: '2023-01-01T00:00:00Z',
        status: 'ACTIVE',
        tierInstanceConfigSchemaId: 'jackpot-tier-instance-default',
        updateConfigSchemaId: 'jackpot-update-default',
      },
      {
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
        jackpotId: 'jackpotId2',
        modifiedAt: '2023-01-01T00:00:00Z',
        status: 'SUSPENDED',
        tierInstanceConfigSchemaId: 'jackpot-tier-instance-default',
        updateConfigSchemaId: 'jackpot-update-default',
      },
      {
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
        jackpotId: 'jackpotId3',
        modifiedAt: '2023-01-01T00:00:00Z',
        status: 'FINISHED',
        tierInstanceConfigSchemaId: 'jackpot-tier-instance-default',
        updateConfigSchemaId: 'jackpot-update-default',
      },
      {
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
        jackpotId: 'jackpotId4',
        modifiedAt: '2023-01-01T00:00:00Z',
        status: 'DELETED',
        tierInstanceConfigSchemaId: 'jackpot-tier-instance-default',
        updateConfigSchemaId: 'jackpot-update-default',
      },
    ],
    empty: true,
    first: true,
    last: true,
    number: 0,
    numberOfElements: 0,
    pageable: {
      offset: 0,
      pageNumber: 0,
      pageSize: 0,
      paged: true,
      sort: {
        empty: true,
        sorted: true,
        unsorted: true,
      },
      unpaged: true,
    },
    size: 0,
    sort: {
      empty: true,
      sorted: true,
      unsorted: true,
    },
    totalElements: 0,
    totalPages: 0,
  };
};

export const JackpotsArray: Content[] = Array.from({ length: 100 }, (_, i) => ({
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
  status: `${i % 2 ? 'NEW' : 'FINISHED'}`,
  tierInstanceConfigSchemaId: 'jackpot-tier-instance-default',
  updateConfigSchemaId: 'jackpot-update-default',
}));
