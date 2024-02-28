import { Button, MenuItem, Select, Stack } from '@mui/material';
import { FieldArray, FormikProps, FormikProvider, getIn } from 'formik';
import { ClearButton, InputForm, Label, SectionTitle } from 'layouts/Form';
import { ICreateJackpot } from 'types/FormikTypes';
import ClearIcon from '@mui/icons-material/Clear';

interface ICurrenciesForm {
  jackpotInfo: FormikProps<ICreateJackpot> | FormikProps<Omit<ICreateJackpot, 'jackpotId'>>;
  disabled?: boolean;
}

const CurrenciesForm = ({ jackpotInfo, disabled }: ICurrenciesForm) => {
  return (
    <>
      <SectionTitle>Currencies</SectionTitle>
      <Stack direction="row" spacing={3} alignItems="center" justifyContent="end">
        <Label>Currencies type</Label>
        <Select
          labelId="currenciesType"
          id="currenciesType"
          name="currenciesType"
          value={jackpotInfo.values.currenciesType}
          onChange={jackpotInfo.handleChange}
          size="small"
          style={{ width: '300px' }}
          disabled={disabled}
        >
          <MenuItem value={'fixed-rate'}>fixed-rate</MenuItem>
        </Select>
      </Stack>
      <FormikProvider value={jackpotInfo}>
        <FieldArray name="currencies">
          {({ push, remove }) => (
            <>
              {jackpotInfo.values.currencies.map((el, index) => {
                const currency = `currencies[${index}].currency`;
                const errorCurrency = getIn(jackpotInfo.errors, currency);
                const touchedCurrency = getIn(jackpotInfo.touched, currency);
                const multiplier = `currencies[${index}].multiplier`;
                const errorMultiplier = getIn(jackpotInfo.errors, multiplier);
                const touchedMultiplier = getIn(jackpotInfo.touched, multiplier);

                return (
                  <div key={index} style={{ position: 'relative' }}>
                    <Stack direction="row" spacing={3} alignItems="center" justifyContent="end">
                      <Label>Currency</Label>
                      <InputForm
                        id="currency"
                        variant="outlined"
                        name={currency}
                        value={el.currency}
                        required
                        helperText={touchedCurrency && errorCurrency ? errorCurrency : ''}
                        error={!!touchedCurrency && !!errorCurrency}
                        onChange={jackpotInfo.handleChange}
                        onBlur={jackpotInfo.handleBlur}
                        size="small"
                        disabled={disabled}
                      />
                    </Stack>
                    <Stack direction="row" spacing={3} alignItems="center" justifyContent="end" marginTop={4}>
                      <Label>Multiplier</Label>
                      <InputForm
                        id="multiplier"
                        variant="outlined"
                        name={multiplier}
                        value={el.multiplier ?? ''}
                        required
                        helperText={touchedMultiplier && errorMultiplier ? errorMultiplier : ''}
                        error={!!touchedMultiplier && !!errorMultiplier}
                        onChange={jackpotInfo.handleChange}
                        onBlur={jackpotInfo.handleBlur}
                        size="small"
                        type="number"
                        disabled={disabled}
                      />
                    </Stack>
                    <ClearButton type="button" variant="outlined" onClick={() => remove(index)} disabled={disabled}>
                      <ClearIcon />
                    </ClearButton>
                  </div>
                );
              })}
              <Button
                type="button"
                variant="outlined"
                onClick={() => push({ currency: '', multiplier: 0 })}
                style={{
                  alignSelf: 'end',
                }}
                disabled={disabled}
              >
                Add currency
              </Button>
            </>
          )}
        </FieldArray>
      </FormikProvider>
    </>
  );
};

export default CurrenciesForm;
