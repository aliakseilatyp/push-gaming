import { Box, Button, Checkbox, FormControlLabel, Stack } from '@mui/material';
import { FormikProps, FormikProvider, FieldArray, getIn } from 'formik';
import { InputForm, Label } from 'layouts/Form';
import { ICurrenciesInfo } from 'types/FormikTypes';
import ClearIcon from '@mui/icons-material/Clear';

interface ICurrencyStep {
  currenciesInfo: FormikProps<ICurrenciesInfo>;
}

const CurrencyStep = ({ currenciesInfo }: ICurrencyStep) => (
  <Box margin="20px 0">
    <Label>Base currency</Label>
    <InputForm
      id="baseCurrency"
      label="Base currency"
      name="baseCurrency"
      variant="outlined"
      required
      value={currenciesInfo.values.baseCurrency}
      onChange={currenciesInfo.handleChange}
      error={!!currenciesInfo.touched.baseCurrency && !!currenciesInfo.errors.baseCurrency}
      helperText={
        currenciesInfo.touched.baseCurrency && currenciesInfo.errors.baseCurrency
          ? currenciesInfo.errors.baseCurrency
          : ''
      }
      onBlur={currenciesInfo.handleBlur}
      size="small"
    />
    <FormikProvider value={currenciesInfo}>
      <Label>Exchange rates</Label>
      <FieldArray name="currencies">
        {({ push, remove }) => (
          <div>
            {currenciesInfo.values.currencies.map((el, index) => {
              const currency = `currencies[${index}].currency`;
              const errorCurrency = getIn(currenciesInfo.errors, currency);
              const touchedCurrency = getIn(currenciesInfo.touched, currency);
              const enabled = `currencies[${index}].enabled`;
              const multiplier = `currencies[${index}].multiplier`;
              const errorMultiplier = getIn(currenciesInfo.errors, multiplier);
              const touchedMultiplier = getIn(currenciesInfo.touched, multiplier);

              return (
                <Stack direction="row" alignItems="start" spacing={2} margin="10px 0" key={index}>
                  <InputForm
                    id="currency"
                    variant="outlined"
                    label="Currency"
                    name={currency}
                    value={el.currency}
                    required
                    helperText={touchedCurrency && errorCurrency ? errorCurrency : ''}
                    error={!!touchedCurrency && !!errorCurrency}
                    onChange={currenciesInfo.handleChange}
                    onBlur={currenciesInfo.handleBlur}
                    size="small"
                  />
                  <InputForm
                    id="multiplier"
                    variant="outlined"
                    label="Multiplier"
                    name={multiplier}
                    value={el.multiplier ?? ''}
                    required
                    helperText={touchedMultiplier && errorMultiplier ? errorMultiplier : ''}
                    error={!!touchedMultiplier && !!errorMultiplier}
                    onChange={currenciesInfo.handleChange}
                    onBlur={currenciesInfo.handleBlur}
                    size="small"
                    type='number'
                  />
                  <FormControlLabel
                    required
                    control={<Checkbox checked={el.enabled} onChange={currenciesInfo.handleChange} name={enabled} />}
                    label="Enabled"
                  />
                  <Button type="button" variant="outlined" onClick={() => remove(index)}>
                    <ClearIcon />
                  </Button>
                </Stack>
              );
            })}
            <Button
              type="button"
              variant="outlined"
              onClick={() => push({ currency: '', enabled: false, multiplier: null })}
            >
              Add currency
            </Button>
          </div>
        )}
      </FieldArray>
    </FormikProvider>
  </Box>
);

export default CurrencyStep;
