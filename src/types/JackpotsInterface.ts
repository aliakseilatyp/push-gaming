export interface JackpotsInterface {
  content: Content[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  size: number;
  sort: Sort;
  totalElements: number;
  totalPages: number;
}

export interface Pageable {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  sort: Sort;
  unpaged: boolean;
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export enum StatusJackpotsColor {
  ACTIVE = 'ACTIVE',
  NEW = 'NEW',
  SUSPENDED = 'SUSPENDED',
  FINISHED = 'FINISHED',
  DELETED = 'DELETED',
}

export interface Content {
  config: Config;
  configSchemaId: string;
  createdAt: string;
  jackpotId: string;
  modifiedAt: string;
  status: keyof typeof StatusJackpotsColor;
  tierInstanceConfigSchemaId: string;
  updateConfigSchemaId: string;
}

export interface Config {
  baseCurrency: string;
  contribution: Contribution;
  exchangeRates: ExchangeRates;
  houseEdge: number;
  integrations: Integrations;
  minWager: number;
  schedule: Schedule;
  tiers: Tiers;
}

export interface Tiers {
  [key: string]: Tier;
}

export interface Tier {
  contributionPct: number;
  minContribution: number;
  reseedPct: number;
  seedAmount: number;
  trigger: Trigger;
}

export interface Trigger {
  dropAt: string;
  type: string;
}

export interface Schedule {
  iterations: number;
  startAt: string;
}

export interface Integrations {
  [key: string]: Integration;
}

export interface Integration {
  enabled: boolean;
  games: Games;
  igpCodes: IgpCodes;
}

export interface IgpCodes {
  [key: string]: {
    enabled: boolean;
  };
}

export interface Games {
  [key: string]: {
    enabled: boolean;
  };
}

export interface Fatrabbit1 {
  enabled: boolean;
}

export interface ExchangeRates {
  currencies: Currencies;
  type: string;
}

export interface Currencies {
  [key: string]: {
    enabled: boolean;
    multiplier: number;
  };
}

export interface Contribution {
  amount: number;
  operatorPct: number;
  playerPct: number;
  type: string;
}
