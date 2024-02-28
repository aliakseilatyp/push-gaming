import { MenuItem, Select, Stack } from '@mui/material';
import { FormikProps } from 'formik';
import { InputForm, Label, SectionTitle } from 'layouts/Form';
import { ICreateJackpot } from 'types/FormikTypes';

interface IConfigurationForm {
  jackpotInfo: FormikProps<ICreateJackpot> | FormikProps<Omit<ICreateJackpot, 'jackpotId'>>;
  disabled?: boolean;
}

const ConfigurationForm = ({ jackpotInfo, disabled }: IConfigurationForm) => {
  return (
    <>
      <SectionTitle>Configuration</SectionTitle>
      <Stack direction="row" spacing={3} alignItems="center" justifyContent="end">
        <Label>Base Currency</Label>
        <InputForm
          id="baseCurrency"
          placeholder="Base Currency"
          name="baseCurrency"
          variant="outlined"
          required
          value={jackpotInfo.values.baseCurrency}
          onChange={jackpotInfo.handleChange}
          error={!!jackpotInfo.touched.baseCurrency && !!jackpotInfo.errors.baseCurrency}
          helperText={
            jackpotInfo.touched.baseCurrency && jackpotInfo.errors.baseCurrency ? jackpotInfo.errors.baseCurrency : ''
          }
          disabled={typeof disabled !== 'undefined'}
          onBlur={jackpotInfo.handleBlur}
          size="small"
        />
      </Stack>
      <Stack direction="row" spacing={3} alignItems="center" justifyContent="end">
        <Label>Exclusive</Label>
        <Select
          labelId="exclusive"
          id="exclusive"
          name="exclusive"
          value={jackpotInfo.values.exclusive}
          onChange={jackpotInfo.handleChange}
          size="small"
          style={{ width: '300px' }}
          disabled={disabled}
        >
          <MenuItem value={'true'}>True</MenuItem>
          <MenuItem value={'false'}>False</MenuItem>
        </Select>
      </Stack>
      <Stack direction="row" spacing={3} alignItems="center" justifyContent="end">
        <Label>Subscription</Label>
        <Select
          labelId="subscription"
          id="subscription"
          name="subscription"
          value={jackpotInfo.values.subscription}
          onChange={jackpotInfo.handleChange}
          size="small"
          style={{ width: '300px' }}
          disabled={disabled}
        >
          <MenuItem value={'true'}>True</MenuItem>
          <MenuItem value={'false'}>False</MenuItem>
        </Select>
      </Stack>
      <SectionTitle>Contribution</SectionTitle>
      <Stack direction="row" spacing={3} alignItems="center" justifyContent="end">
        <Label>Contribution type</Label>
        <Select
          labelId="contributionType"
          id="contributionType"
          name="contributionType"
          value={jackpotInfo.values.contributionType}
          onChange={jackpotInfo.handleChange}
          size="small"
          style={{ width: '300px' }}
          disabled={disabled}
        >
          <MenuItem value={'fixed'}>fixed</MenuItem>
        </Select>
      </Stack>
      <Stack direction="row" spacing={3} alignItems="center" justifyContent="end">
        <Label>Funded by</Label>
        <Select
          labelId="fundedBy"
          id="fundedBy"
          name="fundedBy"
          value={jackpotInfo.values.fundedBy}
          onChange={jackpotInfo.handleChange}
          size="small"
          style={{ width: '300px' }}
          disabled={disabled}
        >
          <MenuItem value={'player'}>player</MenuItem>
          <MenuItem value={'operator'}>operator</MenuItem>
        </Select>
      </Stack>
      <Stack direction="row" spacing={3} alignItems="center" justifyContent="end">
        <Label>Percentage</Label>
        <InputForm
          id="percentage"
          placeholder="Percentage"
          name="percentage"
          variant="outlined"
          required
          type="number"
          value={jackpotInfo.values.percentage}
          onChange={jackpotInfo.handleChange}
          error={!!jackpotInfo.touched.percentage && !!jackpotInfo.errors.percentage}
          helperText={
            jackpotInfo.touched.percentage && jackpotInfo.errors.percentage ? jackpotInfo.errors.percentage : ''
          }
          onBlur={jackpotInfo.handleBlur}
          size="small"
          disabled={disabled}
        />
      </Stack>
      <Stack direction="row" spacing={3} alignItems="center" justifyContent="end">
        <Label>Minimum wager</Label>
        <InputForm
          id="minBet"
          placeholder="Minimum wager"
          name="minBet"
          variant="outlined"
          required
          type="number"
          value={jackpotInfo.values.minBet}
          onChange={jackpotInfo.handleChange}
          error={!!jackpotInfo.touched.minBet && !!jackpotInfo.errors.minBet}
          helperText={jackpotInfo.touched.minBet && jackpotInfo.errors.minBet ? jackpotInfo.errors.minBet : ''}
          onBlur={jackpotInfo.handleBlur}
          size="small"
          disabled={disabled}
        />
      </Stack>
      <Stack direction="row" spacing={3} alignItems="center" justifyContent="end">
        <Label>Fixed contribution value</Label>
        <InputForm
          id="amount"
          placeholder="Fixed contribution value"
          name="amount"
          variant="outlined"
          required
          type="number"
          value={jackpotInfo.values.amount}
          onChange={jackpotInfo.handleChange}
          error={!!jackpotInfo.touched.amount && !!jackpotInfo.errors.amount}
          helperText={jackpotInfo.touched.amount && jackpotInfo.errors.amount ? jackpotInfo.errors.amount : ''}
          onBlur={jackpotInfo.handleBlur}
          size="small"
          disabled={disabled}
        />
      </Stack>
    </>
  );
};

export default ConfigurationForm;
