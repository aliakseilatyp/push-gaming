export const JackpotMockData = {
  jackpotId: 'lv-daily-drop',
  // status: 'active',
  status: 'suspended',
  tiers: [
    {
      tierId: 'daily-drop',
      type: 'dt-time-trigger',
      tierInstanceId: 135,
      createdAt: '2024-01-01T12:00:00Z',
      winBy: '2024-01-02T20:00:00Z',
      rampUp: '2024-01-02T16:00:00Z',
    },
  ],
  config: {
    baseCurrency: 'EUR',
    exclusive: false,
    subscription: true,
    contribution: {
      type: 'fixed',
      fundedBy: 'player',
      rtp: 70,
      minBet: 0.1,
      amount: 0.1,
    },
    currencies: {
      type: 'fixed-rate',
      multipliers: {
        GBP: 0.9,
      },
    },
    tiers: [
      {
        tierId: 'daily-drop',
        type: 'time-v1',
        migrationAmount: 0,
        seedAmount: 10000,
        contribution: {
          type: 'percentage',
          splitPct: 100.0,
          reseedPct: 20.0,
        },
        config: {
          max: 12,
          average: 23,
          // frequency: 'daily',
          // winBy: '20:00:00',
          // rampUp: '16:00:00',
        },
      },
    ],
  },
  integrations: {
    leovegas: {
      status: 'active',
      config: {
        qualifyingMatchers: {
          gameCodes: {
            allow: ['wildswarm*', 'fatrabbit1*'],
            deny: ['jokertroupe*'],
          },
          igpCodes: {
            allow: ['*'],
          },
          currencies: {
            allow: ['*'],
          },
          countries: {
            allow: ['*'],
          },
          jurisdictions: {
            allow: ['*'],
          },
        },
      },
    },
    push: {
      status: 'active',
      config: {
        qualifyingMatchers: {
          gameCodes: {
            allow: ['wildswarm*', 'fatrabbit1*'],
            deny: ['jokertroupe*'],
          },
          igpCodes: {
            allow: ['*'],
          },
          currencies: {
            allow: ['*'],
          },
          countries: {
            allow: ['*'],
          },
          jurisdictions: {
            allow: ['*'],
          },
        },
      },
    },
  },
};
