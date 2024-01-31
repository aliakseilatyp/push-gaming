import { StatusJackpotsColor } from 'types';
import { StatusJackpotTierInstanceColor } from 'types/JackpotTierInstanceInterface';

export const statusJackpotsColor: { [key: string]: string } = {
  [StatusJackpotsColor.ACTIVE]: 'green',
  [StatusJackpotsColor.NEW]: 'orange',
  [StatusJackpotsColor.SUSPENDED]: 'orange',
  [StatusJackpotsColor.FINISHED]: 'grey',
  [StatusJackpotsColor.DELETED]: 'grey',
};
export const statusJackpotTierInstanceColor: { [key: string]: string } = {
  [StatusJackpotTierInstanceColor.ACTIVE]: 'green',
  [StatusJackpotTierInstanceColor.VOIDED]: 'red',
  [StatusJackpotTierInstanceColor.FINISHED]: 'grey',
};
