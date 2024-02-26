import * as yup from 'yup';

export const typeInfoValidationSchema = yup.object({
  jackpotType: yup.string().required('Jackpot type is required'),
});

export const currenciesInfoValidationSchema = yup.object({
  baseCurrency: yup
    .string()
    .matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g, 'Currency can only contain Latin letters.')
    .required('Base currency is required'),
  currencies: yup.array().of(
    yup.object().shape({
      currency: yup
        .string()
        .matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g, 'Currency can only contain Latin letters.')
        .required('Currency is required'),
      enabled: yup.boolean().required('Enabled is required'),
      multiplier: yup.number().typeError('Multiplier must be a number').required('Multiplier is required'),
    }),
  ),
});

export const contributionsInfoValidationSchema = yup.object({
  amount: yup.number().typeError('Amount must be a number').required('Amount is required'),
  operatorPct: yup
    .number()
    .max(100, "Operator percentage must be less than or equal to 100")
    .min(0, "Operator percentage must be more than or equal to 100")
    .integer("Operator percentage must be an integer")
    .typeError("Operator percentage must be a number")
    .required("Operator percentage is required"),
  playerPct: yup
    .number()
    .max(100, "Player percentage must be less than or equal to 100")
    .min(0, "Player percentage must be more than or equal to 100")
    .integer("Player percentage must be an integer")
    .typeError("Player percentage must be a number")
    .required("Player percentage is required"),
  minWager: yup.number().typeError('Minimal wager must be a number').required('Minimal wager is required'),
  houseEdge: yup
    .number()
    .integer('House edge must be an integer')
    .typeError('House edge must be a number')
    .required('House edge is required'),
});

export const integrationsInfoValidationSchema = yup.object({
  games: yup.array().of(
    yup.object().shape({
      game: yup
        .string()
        .matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g, 'Game can only contain Latin letters.')
        .required('Game is required'),
      enabled: yup.boolean().required('Enabled is required'),
    }),
  ),
  igpCodes: yup.array().of(
    yup.object().shape({
      igp: yup
        .string()
        .matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g, 'IGP can only contain Latin letters.')
        .required('IGP is required'),
      enabled: yup.boolean().required('Enabled is required'),
    }),
  ),
});

export const scheduleInfoValidationSchema = yup.object({
  iterations: yup.number().typeError('Iterations must be a number').required('Iterations is required'),
  startAt: yup.date().min(new Date(), "Start can't be past").required('Start is required'),
});

export const tiersInfoValidationSchema = yup.object({
  tiers: yup.array().of(
    yup.object().shape({
      tier: yup
        .string()
        .matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g, 'Tier can only contain Latin letters.')
        .required('Tier is required'),
      contributionPct: yup
        .number()
        .max(100, 'Contribution percentage must be less than or equal to 100')
        .min(0, 'Contribution percentage must be more than or equal to 100')
        .integer('Contribution percentage must be an integer')
        .typeError('Contribution percentage must be a number')
        .required('Contribution percentage is required'),
      minContribution: yup
        .number()
        .typeError('Minimum contribution must be a number')
        .required('Minimum contribution is required'),
      reseedPct: yup
        .number()
        .max(100, 'Reseed percentage must be less than or equal to 100')
        .min(0, 'Reseed percentage must be more than or equal to 100')
        .integer('Reseed percentage must be an integer')
        .typeError('Reseed percentage must be a number')
        .required('Reseed percentage is required'),
      seedAmount: yup.number().typeError('Seed amount must be a number').required('Seed amount is required'),
      dropAt: yup.date().min(new Date(), "Drop can't be past").required('Drop is required'),
      type: yup
        .string()
        .matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g, 'Type can only contain Latin letters.')
        .required('Type is required'),
    }),
  ),
});
