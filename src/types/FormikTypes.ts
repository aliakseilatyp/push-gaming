export interface ICreateJackpot {
  jackpotId: string;
  baseCurrency: string;
  exclusive: boolean;
  subscription: boolean;
  contributionType: string;
  fundedBy: string;
  percentage: number;
  minBet: number | null;
  amount: number | null;
  currenciesType: string;
  currencies: { currency: string; multiplier: number }[];
  tiers: {
    tierId: string;
    tierType: string;
    migrationAmount: number;
    seedAmount: number;
    contributionType: string;
    splitPct: number;
    reseedPct: number;
    config: {
      frequency?: string;
      winBy?: string;
      rampUp?: string;
      average?: number;
      max?: number;
    };
  }[];
}

export interface IScheduleForm {
  startTime: string;
  suspend: string;
  stopTime?: string;
}

export interface ICreateIntegration {
  systemId: string;
  status: string;
  gameCodes: {
    allow: {
      game: string;
    }[];
    deny: {
      game: string;
    }[];
  };
  igpCodes: {
    allow: {
      code: string;
    }[];
    deny: {
      code: string;
    }[];
  };
  currencies: {
    allow: {
      currency: string;
    }[];
    deny: {
      currency: string;
    }[];
  };
  countries: {
    allow: {
      country: string;
    }[];
    deny: {
      country: string;
    }[];
  };
  jurisdictions: {
    allow: {
      jurisdiction: string;
    }[];
    deny: {
      jurisdiction: string;
    }[];
  };
}
