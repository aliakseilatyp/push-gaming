import { StatusJackpotsColor } from 'types';

export const statusColor: { [key: string]: string } = {
  [StatusJackpotsColor.ACTIVE]: 'green',
  [StatusJackpotsColor.NEW]: 'orange',
  [StatusJackpotsColor.SUSPENDED]: 'orange',
  [StatusJackpotsColor.FINISHED]: 'grey',
  [StatusJackpotsColor.DELETED]: 'grey',
};
