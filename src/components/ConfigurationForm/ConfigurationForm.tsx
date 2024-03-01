import { MenuItem, Stack } from '@mui/material';
import { FormikProps } from 'formik';
import { InputContainer, InputForm, Label, SectionTitle, SelectForm } from 'layouts/Form';
import { ICreateJackpot } from 'types/FormikTypes';

interface IConfigurationForm {
  jackpotInfo: FormikProps<ICreateJackpot> | FormikProps<Omit<ICreateJackpot, 'jackpotId'>>;
  disabled?: boolean;
}

const ConfigurationForm = ({ jackpotInfo, disabled }: IConfigurationForm) => {
  return (
    <Stack direction="row" justifyContent="space-between" flexWrap="wrap" gap="32px">
      <Stack direction="column" spacing={3}>
        <SectionTitle>Configuration</SectionTitle>
        <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
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
        </InputContainer>
        <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
          <Label>Exclusive</Label>
          <SelectForm
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
          </SelectForm>
        </InputContainer>
        <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
          <Label>Subscription</Label>
          <SelectForm
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
          </SelectForm>
        </InputContainer>
      </Stack>
      <Stack direction="column" spacing={3}>
        <SectionTitle>Contribution</SectionTitle>
        <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
          <Label>Contribution type</Label>
          <SelectForm
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
          </SelectForm>
        </InputContainer>
        <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
          <Label>Funded by</Label>
          <SelectForm
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
          </SelectForm>
        </InputContainer>
        <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
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
        </InputContainer>
        <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
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
        </InputContainer>
        <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
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
        </InputContainer>
      </Stack>
    </Stack>
  );
};

export default ConfigurationForm;
