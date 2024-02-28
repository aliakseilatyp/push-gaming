export interface JackpotsInterface {
  totalElements: number;
  totalPages: number;
  size: number;
  numberOfElements: number;
  content: ContentJackpots[];
}

export interface ContentJackpots {
  jackpotId: string;
  status: string;
  createdAt: string;
  modifiedAt: string;
}
