export const DATE_FORMAT = 'DD/MM/YYYY HH:mm';

export const JACKPOTS_HEADER_TABLE_ROW = [
  { label: 'Jackpot ID' },
  { label: 'Status' },
  { label: 'Created at' },
  { label: 'Modified at' },
  { label: 'Config schema ID' },
  { label: 'Tier instance config schema ID' },
  { label: 'View details' },
  { label: 'Action' },
  { label: 'Audit Trail ID' },
  { label: 'View Instances' },
];

export const JACKPOT_TIER_INSTANCE_HEADER_TABLE_ROW = [
  { label: 'Instance ID' },
  { label: 'Jackpot ID' },
  { label: 'Tier ID' },
  { label: 'Status' },
  { label: 'Created at' },
  { label: 'Modified at' },
  { label: 'View details' },
  { label: 'View Jackpot' },
];

export const TIER_AUDIT_HEADER_TABLE_ROW = [
  { label: 'Jackpot ID' },
  { label: 'Instance ID' },
  { label: 'Revision date' },
  { label: 'User ID' },
  { label: 'View details' },
];

export const JACKPOT_AUDIT_HEADER_TABLE_ROW = [
  { label: 'Jackpot ID' },
  { label: 'Revision date' },
  { label: 'User ID' },
  { label: 'View details' },
];

export const CURRENCY_HEADER_TABLE_ROW = [{ label: 'Currency' }, { label: 'Enabled' }, { label: 'Multiplier' }];

export const TIERS_HEADER_TABLE_ROW = [
  { label: 'Tier' },
  { label: 'Contribution Pct' },
  { label: 'Min contribution' },
  { label: 'Reseed Pct' },
  { label: 'seedAmount' },
  { label: 'Drop at' },
  { label: 'Type' },
];

export const INTEGRATIONS_HEADER_TABLE_ROW = [{ label: 'Integrations' }, { label: 'Enabled' }];

export const GAMES_HEADER_TABLE_ROW = [{ label: 'Game' }, { label: 'Enabled' }];

export const IGP_HEADER_TABLE_ROW = [{ label: 'IGP' }, { label: 'Enabled' }];
