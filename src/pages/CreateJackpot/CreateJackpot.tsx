import React from 'react';
import { Box, Button, Stack } from '@mui/material';
import { useFormik } from 'formik';
import { ICreateJackpot } from 'types/FormikTypes';
import { createJackpotValidationSchema } from 'validationSchemas';
import { InputContainer, InputForm, Label } from 'layouts/Form';
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
      minBet: null,
      amount: null,
      currenciesType: 'fixed-rate',
      currencies: [],
      tiers: [],
    },
    validationSchema: createJackpotValidationSchema,
    onSubmit: () => {
      const submit = {
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
            if (tier.tierType === 'dt-time-trigger' || tier.tierType === 'pb-time-trigger') {
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
      };
      alert(JSON.stringify(submit));
    },
  });


  return (
    <Box sx={{ width: '100%' }}>
      <h2>Create Jackpot</h2>
      <form noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
        <Stack direction="column" spacing={4}>
          <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
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
          </InputContainer>
          <ConfigurationForm jackpotInfo={jackpotInfo} />
          <Stack direction="row" justifyContent="space-between" flexWrap="wrap" gap="32px">
            <CurrenciesForm jackpotInfo={jackpotInfo} />
            <TiersForm jackpotInfo={jackpotInfo} />
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
