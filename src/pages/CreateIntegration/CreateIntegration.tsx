import { Box, Button, MenuItem, Stack } from '@mui/material';
import { useFormik } from 'formik';
import { InputForm, Label, SectionTitle, SelectForm } from 'layouts/Form';
import { ICreateIntegration } from 'types/FormikTypes';
import { createIntegrationValidationSchema } from 'validationSchemas';
import IntegrationFormikArray from 'components/IntegrationFormikArray';
import { InputContainer, TitleContainer } from 'layouts/Input';

const CreateIntegration = () => {
  const integration = useFormik<ICreateIntegration>({
    initialValues: {
      systemId: '',
      status: 'active',
      gameCodes: {
        allow: [],
        deny: [],
      },
      igpCodes: {
        allow: [],
        deny: [],
      },
      currencies: {
        allow: [],
        deny: [],
      },
      countries: {
        allow: [],
        deny: [],
      },
      jurisdictions: {
        allow: [],
        deny: [],
      },
    },
    validationSchema: createIntegrationValidationSchema,
    onSubmit: () => {
      const submit = {
        integrations: {
          [integration.values.systemId]: {
            status: integration.values.status,
            config: {
              qualifyingMatchers: {
                gameCodes: {
                  allow: Object.values(integration.values.gameCodes.allow).length
                    ? Object.values(integration.values.gameCodes.allow.map((el) => el.game))
                    : ['*'],
                  ...(Object.values(integration.values.gameCodes.deny).length && {
                    deny: Object.values(integration.values.gameCodes.deny.map((el) => el.game)),
                  }),
                },
                igpCodes: {
                  allow: Object.values(integration.values.igpCodes.allow).length
                    ? Object.values(integration.values.igpCodes.allow.map((el) => el.code))
                    : ['*'],
                  ...(Object.values(integration.values.igpCodes.deny).length && {
                    deny: Object.values(integration.values.igpCodes.deny.map((el) => el.code)),
                  }),
                },
                currencies: {
                  allow: Object.values(integration.values.currencies.allow).length
                    ? Object.values(integration.values.currencies.allow.map((el) => el.currency))
                    : ['*'],
                  ...(Object.values(integration.values.currencies.deny).length && {
                    deny: Object.values(integration.values.currencies.deny.map((el) => el.currency)),
                  }),
                },
                countries: {
                  allow: Object.values(integration.values.countries.allow).length
                    ? Object.values(integration.values.countries.allow.map((el) => el.country))
                    : ['*'],
                  ...(Object.values(integration.values.countries.deny).length && {
                    deny: Object.values(integration.values.countries.deny.map((el) => el.country)),
                  }),
                },
                jurisdictions: {
                  allow: Object.values(integration.values.jurisdictions.allow).length
                    ? Object.values(integration.values.jurisdictions.allow.map((el) => el.jurisdiction))
                    : ['*'],
                  ...(Object.values(integration.values.jurisdictions.deny).length && {
                    deny: Object.values(integration.values.jurisdictions.deny.map((el) => el.jurisdiction)),
                  }),
                },
              },
            },
          },
        },
      };
      alert(JSON.stringify(submit));
    },
  });

  return (
    <Box sx={{ width: '100%' }}>
      <h2>Create Integration</h2>
      <form noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
        <Stack direction="column" spacing={4}>
          <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
            <Label>System ID</Label>
            <InputForm
              id="systemId"
              placeholder="System ID"
              name="systemId"
              variant="outlined"
              required
              value={integration.values.systemId}
              onChange={integration.handleChange}
              error={!!integration.touched.systemId && !!integration.errors.systemId}
              helperText={
                integration.touched.systemId && integration.errors.systemId ? integration.errors.systemId : ''
              }
              onBlur={integration.handleBlur}
              size="small"
            />
          </InputContainer>
          <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
            <Label>Status</Label>
            <SelectForm
              labelId="status"
              id="status"
              name="status"
              value={integration.values.status}
              onChange={integration.handleChange}
              size="small"
              style={{ width: '300px' }}
            >
              <MenuItem value={'active'}>Active</MenuItem>
              <MenuItem value={'suspended'}>Suspended</MenuItem>
            </SelectForm>
          </InputContainer>
          <SectionTitle>Game Codes</SectionTitle>
          <TitleContainer>Allow</TitleContainer>
          <IntegrationFormikArray
            integration={integration}
            fieldName={'gameCodes.allow'}
            valuesArray={integration.values.gameCodes.allow}
            name="game"
          />
          <TitleContainer>Deny</TitleContainer>
          <IntegrationFormikArray
            integration={integration}
            fieldName={'gameCodes.deny'}
            valuesArray={integration.values.gameCodes.deny}
            name="game"
          />
          <SectionTitle>iGP codes</SectionTitle>
          <TitleContainer>Allow</TitleContainer>
          <IntegrationFormikArray
            integration={integration}
            fieldName={'igpCodes.allow'}
            valuesArray={integration.values.igpCodes.allow}
            name="code"
          />
          <TitleContainer>Deny</TitleContainer>
          <IntegrationFormikArray
            integration={integration}
            fieldName={'igpCodes.deny'}
            valuesArray={integration.values.igpCodes.deny}
            name="code"
          />
          <SectionTitle>Currencies</SectionTitle>
          <TitleContainer>Allow</TitleContainer>
          <IntegrationFormikArray
            integration={integration}
            fieldName={'currencies.allow'}
            valuesArray={integration.values.currencies.allow}
            name="currency"
          />
          <TitleContainer>Deny</TitleContainer>
          <IntegrationFormikArray
            integration={integration}
            fieldName={'currencies.deny'}
            valuesArray={integration.values.currencies.deny}
            name="currency"
          />
          <SectionTitle>Countries</SectionTitle>
          <TitleContainer>Allow</TitleContainer>
          <IntegrationFormikArray
            integration={integration}
            fieldName={'countries.allow'}
            valuesArray={integration.values.countries.allow}
            name="country"
          />
          <TitleContainer>Deny</TitleContainer>
          <IntegrationFormikArray
            integration={integration}
            fieldName={'countries.deny'}
            valuesArray={integration.values.countries.deny}
            name="country"
          />
          <SectionTitle>Jurisdictions</SectionTitle>
          <TitleContainer>Allow</TitleContainer>
          <IntegrationFormikArray
            integration={integration}
            fieldName={'jurisdictions.allow'}
            valuesArray={integration.values.jurisdictions.allow}
            name="jurisdiction"
          />
          <TitleContainer>Deny</TitleContainer>
          <IntegrationFormikArray
            integration={integration}
            fieldName={'jurisdictions.deny'}
            valuesArray={integration.values.jurisdictions.deny}
            name="jurisdiction"
          />
          <Button
            variant="contained"
            style={{ minWidth: '300px', alignSelf: 'center' }}
            onClick={() => {
              integration.handleSubmit();
            }}
          >
            Save
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default CreateIntegration;
