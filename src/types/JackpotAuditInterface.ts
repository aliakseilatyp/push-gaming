export interface IJackpotAudit {
  content: ContentJackpotAudit[];
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

export interface ContentJackpotAudit {
  entity: Entity;
  metadata: Metadata;
  requiredRevisionInstant: string;
  requiredRevisionNumber: number;
  revisionInstant: string;
  revisionNumber: number;
}

export interface Metadata {
  delegate: Delegate;
  requiredRevisionInstant: string;
  requiredRevisionNumber: number;
  revisionDate: string;
  revisionInstant: string;
  revisionNumber: number;
  revisionType: string;
}

export interface Delegate {
  id: number;
  revisionDate: string;
  timestamp: number;
}

export interface Entity {
  config: Config;
  configSchemaId: string;
  createdAt: string;
  jackpotId: string;
  modifiedAt: string;
  status: string;
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
  'daily-drop': Dailydrop;
}

export interface Dailydrop {
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
  leovegas: Leovegas;
}

export interface Leovegas {
  enabled: boolean;
  games: Games;
  igpCodes: IgpCodes;
}

export interface IgpCodes {
  '*': Fatrabbit1;
}

export interface Games {
  'fatrabbit1-*': Fatrabbit1;
  'wildswarm-*': Fatrabbit1;
}

export interface Fatrabbit1 {
  enabled: boolean;
}

export interface ExchangeRates {
  currencies: Currencies;
  type: string;
}

export interface Currencies {
  EUR: EUR;
}

export interface EUR {
  enabled: boolean;
  multiplier: number;
}

export interface Contribution {
  amount: number;
  operatorPct: number;
  playerPct: number;
  type: string;
}