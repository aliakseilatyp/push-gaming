import { Autocomplete, Button } from '@mui/material';
import { FieldArray, FormikContextType, FormikProvider, getIn } from 'formik';
import { ClearButton, Divider, InputContainer, InputIntegration } from 'layouts/Form';
import { ICreateIntegration } from 'types/FormikTypes';
import ClearIcon from '@mui/icons-material/Clear';

interface IIntegrationFormikArray {
  integration: FormikContextType<ICreateIntegration>;
  fieldName: string;
  valuesArray: { [key: string]: string }[];
  name: string;
  autocomplete?: boolean;
  optionsArray?: string[];
}

const IntegrationFormikArray = ({
  integration,
  fieldName,
  valuesArray,
  name,
  autocomplete = false,
  optionsArray,
}: IIntegrationFormikArray) => {
  return (
    <FormikProvider value={integration}>
      <FieldArray name={fieldName}>
        {({ push, remove }) => (
          <>
            {valuesArray.map((el, index) => {
              const value = `${fieldName}[${index}].${name}`;
              const errorValue = getIn(integration.errors, value);
              const touchedValue = getIn(integration.touched, value);

              return (
                <InputContainer direction="column" spacing={3} key={index}>
                  <InputContainer
                    key={index}
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    {autocomplete && optionsArray ? (
                      <Autocomplete
                        freeSolo
                        inputValue={el[name]}
                        onInputChange={(event, newInputValue) => {
                          integration.setFieldValue(value, newInputValue);
                        }}
                        options={optionsArray.map((el) => el)}
                        fullWidth
                        renderInput={(params) => (
                          <InputIntegration
                            {...params}
                            id={`${name}-${index}`}
                            variant="outlined"
                            name={value}
                            value={el[name]}
                            required
                            helperText={touchedValue && errorValue ? errorValue : ''}
                            error={!!touchedValue && !!errorValue}
                            onChange={integration.handleChange}
                            onBlur={integration.handleBlur}
                            size="small"
                          />
                        )}
                      />
                    ) : (
                      <InputIntegration
                        id={`${name}-${index}`}
                        variant="outlined"
                        name={value}
                        value={el[name]}
                        required
                        helperText={touchedValue && errorValue ? errorValue : ''}
                        error={!!touchedValue && !!errorValue}
                        onChange={integration.handleChange}
                        onBlur={integration.handleBlur}
                        size="small"
                      />
                    )}

                    <ClearButton type="button" variant="outlined" onClick={() => remove(index)} color="error">
                      <ClearIcon />
                    </ClearButton>
                  </InputContainer>
                  <Divider />
                </InputContainer>
              );
            })}
            <InputContainer>
              <Button
                type="button"
                variant="outlined"
                onClick={() => push({ [name]: '' })}
                style={{
                  alignSelf: 'end',
                }}
              >
                Add
              </Button>
            </InputContainer>
          </>
        )}
      </FieldArray>
    </FormikProvider>
  );
};

export default IntegrationFormikArray;
