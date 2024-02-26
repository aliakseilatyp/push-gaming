export interface IJackpotTypesInfo {
  jackpotType: string;
}

export interface ICurrenciesInfo {
  baseCurrency: string;
  currencies: { currency: string; enabled: boolean; multiplier: number | null }[];
}

export interface IContributionsInfo {
  amount: number | null;
  operatorPct: number;
  playerPct: number;
  minWager: number | null;
  houseEdge: number | null;
}

export interface IIntegrationsInfo {
  games: { game: string; enabled: boolean }[];
  igpCodes: { igp: string; enabled: boolean }[];
}

export interface IScheduleInfo {
  iterations: number | null;
  startAt: string;
}

export interface ITiersInfo {
  tiers: {
    tier: string;
    contributionPct: number;
    minContribution: number |null;
    reseedPct: number;
    seedAmount: number |null;
    dropAt: string;
    type: string;
  }[];
}
