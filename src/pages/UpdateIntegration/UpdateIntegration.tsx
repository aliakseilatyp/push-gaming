import { Box, Button, MenuItem, Stack } from '@mui/material';
import { useFormik } from 'formik';
import { InputContainer, InputForm, Label, SectionTitle, SelectForm, TitleContainer } from 'layouts/Form';
import { ICreateIntegration } from 'types/FormikTypes';
import { createIntegrationValidationSchema } from 'validationSchemas';
import IntegrationFormikArray from 'components/IntegrationFormikArray';
import { JackpotMockData } from 'mockData/JackpotMockData';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { KeycloackContext } from 'context/KeyckoakContext';
import { ROLES } from 'constants/roles';
import routes from 'constants/routes';
import { COUNTRIES, CURRENCIES, JURISDICTIONS } from 'constants/constants';

const UpdateIntegration = () => {
  const navigate = useNavigate();
  const { keycloackValue } = useContext(KeycloackContext);
  const { systemId } = useParams();
  const integrationId = JackpotMockData.integrations[systemId ?? ''];

  const integration = useFormik<ICreateIntegration>({
    initialValues: {
      systemId: systemId ?? '',
      status: integrationId.status,
      gameCodes: {
        allow: integrationId.config.qualifyingMatchers.gameCodes.allow
          .filter((el) => el !== '*')
          .map((el) => ({ game: el })),
        deny: !!integrationId.config.qualifyingMatchers.gameCodes.deny
          ? integrationId.config.qualifyingMatchers.gameCodes.deny.map((el) => {
              return { game: el };
            })
          : [],
      },
      igpCodes: {
        allow: integrationId.config.qualifyingMatchers.igpCodes.allow
          .filter((el) => el !== '*')
          .map((el) => ({ code: el })),
        deny: !!integrationId.config.qualifyingMatchers.igpCodes.deny
          ? integrationId.config.qualifyingMatchers.igpCodes.deny.map((el) => {
              return { code: el };
            })
          : [],
      },
      currencies: {
        allow: integrationId.config.qualifyingMatchers.currencies.allow
          .filter((el) => el !== '*')
          .map((el) => ({ currency: el })),
        deny: !!integrationId.config.qualifyingMatchers.currencies.deny
          ? integrationId.config.qualifyingMatchers.currencies.deny.map((el) => {
              return { currency: el };
            })
          : [],
      },
      countries: {
        allow: integrationId.config.qualifyingMatchers.countries.allow
          .filter((el) => el !== '*')
          .map((el) => ({ country: el })),
        deny: !!integrationId.config.qualifyingMatchers.countries.deny
          ? integrationId.config.qualifyingMatchers.countries.deny.map((el) => {
              return { country: el };
            })
          : [],
      },
      jurisdictions: {
        allow: integrationId.config.qualifyingMatchers.jurisdictions.allow
          .filter((el) => el !== '*')
          .map((el) => ({ jurisdiction: el })),
        deny: !!integrationId.config.qualifyingMatchers.jurisdictions.deny
          ? integrationId.config.qualifyingMatchers.jurisdictions.deny.map((el) => {
              return { jurisdiction: el };
            })
          : [],
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

  useEffect(() => {
    if (!keycloackValue?.realmAccess?.roles.includes(ROLES.integrationAdmin)) {
      navigate(routes.jackpots);
    }
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <h2>Update Integration</h2>
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
              disabled
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
          <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
            <Label>Criteria type</Label>
            <InputForm
              id="criteriaType"
              placeholder="Criteria type"
              name="criteriaType"
              variant="outlined"
              required
              value={'Matchers'}
              size="small"
              disabled
            />
          </InputContainer>
          <Stack direction="row" justifyContent="space-between" flexWrap="wrap" gap="32px">
            <InputContainer direction="column" spacing={3}>
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
            </InputContainer>
            <InputContainer direction="column" spacing={3}>
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
            </InputContainer>
          </Stack>
          <Stack direction="row" justifyContent="space-between" flexWrap="wrap" gap="32px">
            <InputContainer direction="column" spacing={3}>
              <SectionTitle>Currencies</SectionTitle>
              <TitleContainer>Allow</TitleContainer>
              <IntegrationFormikArray
                integration={integration}
                fieldName={'currencies.allow'}
                valuesArray={integration.values.currencies.allow}
                name="currency"
                autocomplete
                optionsArray={CURRENCIES}
              />
              <TitleContainer>Deny</TitleContainer>
              <IntegrationFormikArray
                integration={integration}
                fieldName={'currencies.deny'}
                valuesArray={integration.values.currencies.deny}
                name="currency"
                autocomplete
                optionsArray={CURRENCIES}
              />
            </InputContainer>
            <InputContainer direction="column" spacing={3}>
              <SectionTitle>Countries</SectionTitle>
              <TitleContainer>Allow</TitleContainer>
              <IntegrationFormikArray
                integration={integration}
                fieldName={'countries.allow'}
                valuesArray={integration.values.countries.allow}
                name="country"
                autocomplete
                optionsArray={COUNTRIES}
              />
              <TitleContainer>Deny</TitleContainer>
              <IntegrationFormikArray
                integration={integration}
                fieldName={'countries.deny'}
                valuesArray={integration.values.countries.deny}
                name="country"
                autocomplete
                optionsArray={COUNTRIES}
              />
            </InputContainer>
          </Stack>
          <InputContainer direction="column" spacing={3}>
            <SectionTitle>Jurisdictions</SectionTitle>
            <TitleContainer>Allow</TitleContainer>
            <IntegrationFormikArray
              integration={integration}
              fieldName={'jurisdictions.allow'}
              valuesArray={integration.values.jurisdictions.allow}
              name="jurisdiction"
              autocomplete
              optionsArray={JURISDICTIONS}
            />
            <TitleContainer>Deny</TitleContainer>
            <IntegrationFormikArray
              integration={integration}
              fieldName={'jurisdictions.deny'}
              valuesArray={integration.values.jurisdictions.deny}
              name="jurisdiction"
              autocomplete
              optionsArray={JURISDICTIONS}
            />
          </InputContainer>
          <Button
            variant="contained"
            style={{ minWidth: '300px', alignSelf: 'center', backgroundColor: '#264274' }}
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

export default UpdateIntegration;
