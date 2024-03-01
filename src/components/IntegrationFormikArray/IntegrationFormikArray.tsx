import { Button, Stack } from '@mui/material';
import { FieldArray, FormikContextType, FormikProvider, getIn } from 'formik';
import { ClearButton, InputForm } from 'layouts/Form';
import { ICreateIntegration } from 'types/FormikTypes';
import ClearIcon from '@mui/icons-material/Clear';
import { FieldContainer, InputContainer } from 'layouts/Input';

interface IIntegrationFormikArray {
  integration: FormikContextType<ICreateIntegration>;
  fieldName: string;
  valuesArray: { [key: string]: string }[];
  name: string;
}

const IntegrationFormikArray = ({ integration, fieldName, valuesArray, name }: IIntegrationFormikArray) => {
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
                <FieldContainer key={index} style={{ position: 'relative' }}>
                  <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
                    <InputForm
                      id={`${name}-${index}`}
                      variant="outlined"
                      name={value}
                      value={el.value}
                      required
                      helperText={touchedValue && errorValue ? errorValue : ''}
                      error={!!touchedValue && !!errorValue}
                      onChange={integration.handleChange}
                      onBlur={integration.handleBlur}
                      size="small"
                    />
                  </InputContainer>
                  <ClearButton type="button" variant="outlined" onClick={() => remove(index)}>
                    <ClearIcon />
                  </ClearButton>
                </FieldContainer>
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
