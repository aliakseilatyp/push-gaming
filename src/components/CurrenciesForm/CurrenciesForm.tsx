import { Autocomplete, Button, MenuItem } from '@mui/material';
import { CURRENCIES } from 'constants/constants';
import { FieldArray, FormikProps, FormikProvider, getIn } from 'formik';
import { Divider, InputContainer, InputForm, Label, SectionTitle, SelectForm } from 'layouts/Form';
import { ICreateJackpot } from 'types/FormikTypes';

interface ICurrenciesForm {
  jackpotInfo: FormikProps<ICreateJackpot> | FormikProps<Omit<ICreateJackpot, 'jackpotId'>>;
  disabled?: boolean;
}

const CurrenciesForm = ({ jackpotInfo, disabled }: ICurrenciesForm) => {
  
  return (
    <InputContainer direction="column" spacing={3}>
      <SectionTitle>Currencies</SectionTitle>
      <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
        <Label>Currencies type</Label>
        <SelectForm
          labelId="currenciesType"
          id="currenciesType"
          name="currenciesType"
          value={jackpotInfo.values.currenciesType}
          onChange={jackpotInfo.handleChange}
          size="small"
          disabled={disabled}
        >
          <MenuItem value={'fixed-rate'}>fixed-rate</MenuItem>
        </SelectForm>
      </InputContainer>
      <Divider />
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
                  <InputContainer key={index} direction="column" spacing={3}>
                    <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
                      <Label>Currency</Label>
                      <Autocomplete
                        freeSolo
                        inputValue={el.currency}
                        onInputChange={(event, newInputValue) => {
                          jackpotInfo.setFieldValue(currency, newInputValue);
                        }}
                        options={CURRENCIES.map((el) => el)}
                        disabled={disabled}
                        renderInput={(params) => (
                          <InputForm
                            {...params}
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
                        )}
                      />
                    </InputContainer>
                    <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
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
                    </InputContainer>
                    <Button
                      type="button"
                      variant="outlined"
                      onClick={() => remove(index)}
                      color="error"
                      disabled={disabled}
                    >
                      Delete
                    </Button>
                    <Divider />
                  </InputContainer>
                );
              })}
              <InputContainer>
                <Button
                  type="button"
                  variant="outlined"
                  onClick={() => push({ currency: '', multiplier: 0 })}
                  style={{
                    alignSelf: 'end',
                  }}
                  disabled={disabled}
                >
                  Add
                </Button>
              </InputContainer>
            </>
          )}
        </FieldArray>
      </FormikProvider>
    </InputContainer>
  );
};

export default CurrenciesForm;
