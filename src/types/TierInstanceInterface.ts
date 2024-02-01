export interface ITierInstance {
  content: ContentTierInstance[];
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

export interface ContentTierInstance {
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
  createdAt: string;
  instanceId: number;
  jackpotId: string;
  modifiedAt: string;
  status: string;
  tierId: string;
}

export interface Config {
  exchangeRates: ExchangeRates;
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