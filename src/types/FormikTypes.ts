export interface ICreateJackpot {
  jackpotId: string;
  baseCurrency: string;
  exclusive: boolean;
  subscription: boolean;
  contributionType: string;
  fundedBy: string;
  percentage: number;
  minBet: number;
  amount: number;
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
    configType: string;
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
