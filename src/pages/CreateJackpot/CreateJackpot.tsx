import React from 'react';
import { Box, Button, MenuItem, Select, Stack } from '@mui/material';
import { FieldArray, FormikProvider, getIn, useFormik } from 'formik';
import { ICreateJackpot } from 'types/FormikTypes';
import { createJackpotValidationSchema } from 'validationSchemas';
import { InputForm, Label } from 'layouts/Form';
import ClearIcon from '@mui/icons-material/Clear';
import ConfigurationForm from 'components/ConfigurationForm';
import CurrenciesForm from 'components/CurrenciesForm';
import TiersForm from 'components/TiersForm';

export const CreateJackpot = () => {
  const jackpotInfo = useFormik<ICreateJackpot>({
    initialValues: {
      jackpotId: '',
      baseCurrency: '',
      exclusive: false,
      subscription: false,
      contributionType: 'fixed',
      fundedBy: 'player',
      percentage: 0,
      minBet: 0,
      amount: 0,
      currenciesType: 'fixed-rate',
      currencies: [],
      tiers: [],
    },
    validationSchema: createJackpotValidationSchema,
    onSubmit: () => {
      alert(
        JSON.stringify({
          jackpotId: jackpotInfo.values.jackpotId,
          config: {
            baseCurrency: jackpotInfo.values.baseCurrency,
            exclusive: jackpotInfo.values.exclusive,
            subscription: jackpotInfo.values.subscription,
            contribution: {
              type: jackpotInfo.values.contributionType,
              fundedBy: jackpotInfo.values.fundedBy,
              rtp: jackpotInfo.values.percentage,
              minBet: jackpotInfo.values.minBet,
              amount: jackpotInfo.values.amount,
            },
            currencies: {
              type: jackpotInfo.values.currenciesType,
              multipliers: jackpotInfo.values.currencies.reduce(
                (acc, el) => ({ ...acc, [el.currency]: el.multiplier }),
                {},
              ),
            },
            tiers: jackpotInfo.values.tiers.map((tier) => {
              let config;
              if (tier.configType === 'Daily Time') {
                config = {
                  frequency: tier.config.frequency,
                  winBy: tier.config.winBy,
                  rampUp: tier.config.rampUp,
                };
              } else {
                config = {
                  average: tier.config.average,
                  max: tier.config.max,
                };
              }
              return {
                tierId: tier.tierId,
                type: tier.tierType,
                migrationAmount: tier.migrationAmount,
                seedAmount: tier.seedAmount,
                contribution: {
                  type: tier.contributionType,
                  splitPct: tier.splitPct,
                  reseedPct: tier.reseedPct,
                },
                config,
              };
            }),
          },
        }),
      );
    },
  });

  return (
    <Box sx={{ width: '100%' }}>
      <form noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
        <Stack direction="column" spacing={4} maxWidth="525px" margin="0 auto">
          <Stack direction="row" spacing={3} alignItems="center" justifyContent="end">
            <Label>Jackpot ID</Label>
            <InputForm
              id="jackpotId"
              placeholder="Jackpot ID"
              name="jackpotId"
              variant="outlined"
              required
              value={jackpotInfo.values.jackpotId}
              onChange={jackpotInfo.handleChange}
              error={!!jackpotInfo.touched.jackpotId && !!jackpotInfo.errors.jackpotId}
              helperText={
                jackpotInfo.touched.jackpotId && jackpotInfo.errors.jackpotId ? jackpotInfo.errors.jackpotId : ''
              }
              onBlur={jackpotInfo.handleBlur}
              size="small"
            />
          </Stack>
          <ConfigurationForm jackpotInfo={jackpotInfo} />
          <CurrenciesForm jackpotInfo={jackpotInfo} />
          <TiersForm jackpotInfo={jackpotInfo} />
          <Button
            variant="contained"
            style={{ minWidth: '300px', alignSelf: 'center' }}
            onClick={() => {
              jackpotInfo.handleSubmit();
            }}
          >
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
