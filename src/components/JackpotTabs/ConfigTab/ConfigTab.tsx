import { Box, Button, Stack } from '@mui/material';
import ConfigurationForm from 'components/ConfigurationForm';
import CurrenciesForm from 'components/CurrenciesForm';
import TiersForm from 'components/TiersForm';
import { useFormik } from 'formik';
import { JackpotMockData } from 'mockData/JackpotMockData';
import { ICreateJackpot } from 'types/FormikTypes';
import { updateJackpotValidationSchema } from 'validationSchemas';

const ConfigTab = () => {
  const jackpot = JackpotMockData;
  const jackpotInfo = useFormik<Omit<ICreateJackpot, 'jackpotId'>>({
    initialValues: {
      baseCurrency: jackpot.config.baseCurrency,
      exclusive: jackpot.config.exclusive,
      subscription: jackpot.config.subscription,
      contributionType: jackpot.config.contribution.type,
      fundedBy: jackpot.config.contribution.fundedBy,
      percentage: jackpot.config.contribution.rtp,
      minBet: jackpot.config.contribution.minBet,
      amount: jackpot.config.contribution.amount,
      currenciesType: jackpot.config.currencies.type,
      currencies: Object.entries(jackpot.config.currencies.multipliers).map(([currency, multiplier]) => ({
        currency,
        multiplier,
      })),
      tiers: jackpot.config.tiers.map((tier) => {
        let configType;
        if (tier.config?.hasOwnProperty('frequency')) {
          configType = 'Daily Time';
        } else {
          configType = 'Value';
        }
        return {
          tierId: tier.tierId,
          tierType: tier.type,
          migrationAmount: tier.migrationAmount,
          seedAmount: tier.seedAmount,
          contributionType: tier.contribution.type,
          splitPct: tier.contribution.splitPct,
          reseedPct: tier.contribution.reseedPct,
          configType,
          config: tier.config,
        };
      }),
    },
    validationSchema: updateJackpotValidationSchema,
    onSubmit: () => {},
  });

  const isDisabled = jackpot.status !== 'suspended';
  return (
    <Box sx={{ width: '100%' }}>
      <form noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
        <Stack direction="column" spacing={4}>
          <ConfigurationForm jackpotInfo={jackpotInfo} disabled={isDisabled} />
          <Stack direction="row" justifyContent="space-between" flexWrap="wrap" gap="32px">
            <CurrenciesForm jackpotInfo={jackpotInfo} disabled={isDisabled} />
            <TiersForm jackpotInfo={jackpotInfo} disabled={isDisabled} />
          </Stack>
          <Button
            variant="contained"
            style={{ minWidth: '300px', alignSelf: 'center', backgroundColor: '#264274' }}
            onClick={() => {
              jackpotInfo.handleSubmit();
            }}
          >
            Save
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default ConfigTab;
