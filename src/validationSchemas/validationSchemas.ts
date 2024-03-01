import * as yup from 'yup';

export const updateJackpotValidationSchema = yup.object({
  baseCurrency: yup
    .string()
    .max(6, 'Length of base currency must be less than or equal to 6')
    .matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g, 'Base currency can only contain Latin letters.')
    .required('Base currency is required'),
  exclusive: yup.boolean().required('Exclusive is required'),
  subscription: yup.boolean().required('Exclusive is required'),
  contributionType: yup.string().required('Contribution type is required'),
  fundedBy: yup.string().required('Funded by is required'),
  percentage: yup
    .number()
    .max(100, 'Percentage must be less than or equal to 100')
    .min(0, 'Percentage must be more than or equal to 100')
    .integer('Percentage must be an integer')
    .typeError('Percentage must be a number')
    .required('Percentage is required'),
  minBet: yup
    .number()
    .test('is-decimal', 'Minimum wager should have maximum two digits after comma', (val: any) => {
      if (val != undefined) {
        return /^\d+(\.\d{0,2})?$/.test(val);
      }
      return true;
    })
    .typeError('Minimum wager must be a number')
    .required('Minimum wager is required'),
  amount: yup
    .number()
    .test('is-decimal', 'Amount should have maximum two digits after comma', (val: any) => {
      if (val != undefined) {
        return /^\d+(\.\d{0,2})?$/.test(val);
      }
      return true;
    })
    .typeError('Amount must be a number')
    .required('Amount is required'),
  currenciesType: yup.string().required('Currencies type is required'),
  currencies: yup.array().of(
    yup.object().shape({
      currency: yup
        .string()
        .matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g, 'Currency can only contain Latin letters.')
        .required('Currency is required'),
      multiplier: yup.number().typeError('Multiplier must be a number').required('Multiplier is required'),
    }),
  ),
  tiers: yup.array().of(
    yup.object().shape({
      tierId: yup.string().required('Tier ID is required'),
      tierType: yup.string().required('Tier type is required'),
      migrationAmount: yup
        .number()
        .test('is-decimal', 'Override amount should have maximum two digits after comma', (val: any) => {
          if (val != undefined) {
            return /^\d+(\.\d{0,2})?$/.test(val);
          }
          return true;
        })
        .typeError('Override amount must be a number')
        .required('Override amount is required'),
      seedAmount: yup
        .number()
        .test('is-decimal', 'Seed amount should have maximum two digits after comma', (val: any) => {
          if (val != undefined) {
            return /^\d+(\.\d{0,2})?$/.test(val);
          }
          return true;
        })
        .typeError('Seed amount must be a number')
        .required('Seed amount is required'),
      contributionType: yup.string().required('Contribution type is required'),
      splitPct: yup
        .number()
        .max(100, 'Split percentage must be less than or equal to 100')
        .min(0, 'Split percentage must be more than or equal to 100')
        .integer('Split percentage must be an integer')
        .typeError('Split percentage must be a number')
        .required('Split percentage is required'),
      reseedPct: yup
        .number()
        .max(100, 'Reseed percentage must be less than or equal to 100')
        .min(0, 'Reseed percentage must be more than or equal to 100')
        .integer('Reseed percentage must be an integer')
        .typeError('Reseed percentage must be a number')
        .required('Reseed percentage is required'),
      configType: yup.string().required('Config type is required'),
      frequency: yup.string(),
      winBy: yup.string().required('Time is required'),
      rampUp: yup.string().required('Time is required'),
      average: yup.number().typeError('Average must be a number').required('Average is required'),
      max: yup.number().typeError('Average must be a number').required('Average is required'),
    }),
  ),
});

export const createJackpotValidationSchema = updateJackpotValidationSchema.concat(
  yup.object({ jackpotId: yup.string().required('Jackpot ID is required') }),
);

export const scheduleValidationSchema = yup.object({
  startTime: yup.string(),
  suspendAfter: yup.object({
    stopTimeString: yup.string(),
  }),
});

export const createIntegrationValidationSchema = yup.object({
  systemId: yup
    .string()
    .matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g, 'Integration can only contain Latin letters.')
    .matches(/^\S*$/g, "Integration can't contain spaces")
    .required('Integration is required'),
  status: yup.string().required('Status by is required'),
  gameCodes: yup.object().shape({
    allow: yup.array().of(
      yup.object().shape({
        game: yup.string().required('Allow by is required'),
      }),
    ),
    deny: yup.array().of(
      yup.object().shape({
        game: yup.string().required('Deny by is required'),
      }),
    ),
  }),
  igpCodes: yup.object().shape({
    allow: yup.array().of(
      yup.object().shape({
        code: yup.string().required('Allow by is required'),
      }),
    ),
    deny: yup.array().of(
      yup.object().shape({
        code: yup.string().required('Deny by is required'),
      }),
    ),
  }),
  currencies: yup.object().shape({
    allow: yup.array().of(
      yup.object().shape({
        currency: yup.string().required('Allow by is required'),
      }),
    ),
    deny: yup.array().of(
      yup.object().shape({
        currency: yup.string().required('Deny by is required'),
      }),
    ),
  }),
  countries: yup.object().shape({
    allow: yup.array().of(
      yup.object().shape({
        country: yup.string().required('Allow by is required'),
      }),
    ),
    deny: yup.array().of(
      yup.object().shape({
        country: yup.string().required('Deny by is required'),
      }),
    ),
  }),
  jurisdictions: yup.object().shape({
    allow: yup.array().of(
      yup.object().shape({
        jurisdiction: yup.string().required('Allow by is required'),
      }),
    ),
    deny: yup.array().of(
      yup.object().shape({
        jurisdiction: yup.string().required('Deny by is required'),
      }),
    ),
  }),
});
