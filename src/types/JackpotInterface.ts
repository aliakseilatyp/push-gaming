export interface JackpotInterface {
  jackpotId: string;
  status: string;
  tiers: Tier[];
  config: Config2;
  integrations: Integrations;
}

export interface Integrations {
  leovegas: Leovegas;
}

export interface Leovegas {
  status: string;
  config: Config3;
}

export interface Config3 {
  qualifyingMatchers: QualifyingMatchers;
}

export interface QualifyingMatchers {
  gameCodes: GameCodes;
  igpCodes: IgpCodes;
  currencies: IgpCodes;
  countries: IgpCodes;
  jurisdictions: IgpCodes;
}

export interface IgpCodes {
  allow: string[];
}

export interface GameCodes {
  allow: string[];
  deny: string[];
}

export interface Config2 {
  baseCurrency: string;
  exclusive: boolean;
  subscription: boolean;
  contribution: Contribution;
  currencies: Currencies;
  tiers: Tier2[];
}

export interface Tier2 {
  tierId: string;
  type: string;
  migrationAmount: number;
  seedAmount: number;
  contribution: Contribution2;
  config: Config;
}

export interface Config {
  frequency: string;
  winBy: string;
  rampUp: string;
}

export interface Contribution2 {
  type: string;
  splitPct: number;
  reseedPct: number;
}

export interface Currencies {
  type: string;
  multipliers: Multipliers;
}

export interface Multipliers {
  GBP: number;
}

export interface Contribution {
  type: string;
  fundedBy: string;
  rtp: number;
  minBet: number;
  amount: number;
}

export interface Tier {
  tierId: string;
  type: string;
  tierInstanceId: number;
  createdAt: string;
  winBy: string;
  rampUp: string;
}