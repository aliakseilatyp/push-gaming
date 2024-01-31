export interface IJackpotTierInstance {
  content: ContentJackpotTierInstance[];
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

export enum StatusJackpotTierInstanceColor {
  ACTIVE = 'ACTIVE',
  VOIDED = 'VOIDED',
  FINISHED = 'FINISHED',
}

export interface ContentJackpotTierInstance {
  config: Config;
  createdAt: string;
  instanceId: number;
  jackpotId: string;
  modifiedAt: string;
  status: keyof typeof StatusJackpotTierInstanceColor;
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
  [key: string]: {
    enabled: boolean;
    multiplier: number;
  };
}
