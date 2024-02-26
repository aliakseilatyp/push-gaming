import { Box, Button, Divider, Stack } from '@mui/material';
import { FormikProps, FormikProvider, FieldArray, getIn } from 'formik';
import { InputForm, Label } from 'layouts/Form';
import { ITiersInfo } from 'types/FormikTypes';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';
import ClearIcon from '@mui/icons-material/Clear';
import dayjs from 'dayjs';
import { DATE_FORMAT } from 'constants/constants';

interface ITiersStep {
  tiersInfo: FormikProps<ITiersInfo>;
}

const TiersStep = ({ tiersInfo }: ITiersStep) => (
  <Box margin="20px 0">
    <FormikProvider value={tiersInfo}>
      <FieldArray name="tiers">
        {({ push, remove }) => (
          <div>
            {tiersInfo.values.tiers.map((el, index) => {
              const tier = `tiers[${index}].tier`;
              const errorTier = getIn(tiersInfo.errors, tier);
              const touchedTier = getIn(tiersInfo.touched, tier);

              const contributionPct = `tiers[${index}].contributionPct`;
              const errorContributionPct = getIn(tiersInfo.errors, contributionPct);
              const touchedContributionPct = getIn(tiersInfo.touched, contributionPct);

              const minContribution = `tiers[${index}].minContribution`;
              const errorMinContribution = getIn(tiersInfo.errors, minContribution);
              const touchedMinContribution = getIn(tiersInfo.touched, minContribution);

              const reseedPct = `tiers[${index}].reseedPct`;
              const errorReseedPct = getIn(tiersInfo.errors, reseedPct);
              const touchedReseedPct = getIn(tiersInfo.touched, reseedPct);

              const seedAmount = `tiers[${index}].seedAmount`;
              const errorSeedAmount = getIn(tiersInfo.errors, seedAmount);
              const touchedSeedAmount = getIn(tiersInfo.touched, seedAmount);

              const dropAt = `tiers[${index}].dropAt`;
              const errorDropAt = getIn(tiersInfo.errors, dropAt);
              const touchedDropAt = getIn(tiersInfo.touched, dropAt);

              const type = `tiers[${index}].type`;
              const errorType = getIn(tiersInfo.errors, type);
              const touchedType = getIn(tiersInfo.touched, type);

              return (
                <Box margin="20px 0" key={index}>
                  {!!index && <Divider />}
                  <Label>Tier</Label>
                  <Stack direction="row" alignItems="start" spacing={2} margin="10px 0" key={index}>
                    <InputForm
                      id="tier"
                      variant="outlined"
                      label="Tier"
                      name={tier}
                      value={el.tier}
                      required
                      helperText={touchedTier && errorTier ? errorTier : ''}
                      error={!!touchedTier && !!errorTier}
                      onChange={tiersInfo.handleChange}
                      onBlur={tiersInfo.handleBlur}
                      size="small"
                    />
                    <Button type="button" variant="outlined" onClick={() => remove(index)}>
                      <ClearIcon />
                    </Button>
                  </Stack>
                  <Label>Contribution percentage</Label>
                  <InputForm
                    id="contributionPct"
                    variant="outlined"
                    label="Contribution percentage"
                    name={contributionPct}
                    value={el.contributionPct}
                    required
                    helperText={touchedContributionPct && errorContributionPct ? errorContributionPct : ''}
                    error={!!touchedContributionPct && !!errorContributionPct}
                    onChange={tiersInfo.handleChange}
                    onBlur={tiersInfo.handleBlur}
                    size="small"
                    type='number'
                  />
                  <Label>Minimum contribution</Label>
                  <InputForm
                    id="minContribution"
                    variant="outlined"
                    label="Minimum contribution"
                    name={minContribution}
                    value={el.minContribution ?? ''}
                    required
                    helperText={touchedMinContribution && errorMinContribution ? errorMinContribution : ''}
                    error={!!touchedMinContribution && !!errorMinContribution}
                    onChange={tiersInfo.handleChange}
                    onBlur={tiersInfo.handleBlur}
                    size="small"
                    type='number'
                  />
                  <Label>Reseed percentage</Label>
                  <InputForm
                    id="reseedPct"
                    variant="outlined"
                    label="Reseed percentage"
                    name={reseedPct}
                    value={el.reseedPct}
                    required
                    helperText={touchedReseedPct && errorReseedPct ? errorReseedPct : ''}
                    error={!!touchedReseedPct && !!errorReseedPct}
                    onChange={tiersInfo.handleChange}
                    onBlur={tiersInfo.handleBlur}
                    size="small"
                    type='number'
                  />
                  <Label>Seed amount</Label>
                  <InputForm
                    id="seedAmount"
                    variant="outlined"
                    label="Seed amount"
                    name={seedAmount}
                    value={el.seedAmount ?? ''}
                    required
                    helperText={touchedSeedAmount && errorSeedAmount ? errorSeedAmount : ''}
                    error={!!touchedSeedAmount && !!errorSeedAmount}
                    onChange={tiersInfo.handleChange}
                    onBlur={tiersInfo.handleBlur}
                    size="small"
                    type='number'
                  />
                  <Label>Drop at</Label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimeField
                      label="Drop at"
                      format={DATE_FORMAT}
                      value={dayjs(el.dropAt)}
                      disablePast
                      slots={{
                        textField: (params) => <InputForm {...params} />,
                      }}
                      slotProps={{
                        textField: {
                          variant: 'outlined',
                          name: dropAt,
                          size: 'small',
                          error: !!touchedDropAt && !!errorDropAt,
                          onBlur: tiersInfo.handleBlur,
                          helperText: touchedDropAt && errorDropAt ? errorDropAt : '',
                        },
                      }}
                      onChange={(newValue) => {
                        if (newValue?.isValid()) {
                          tiersInfo.setFieldValue(dropAt, newValue?.toISOString());
                        }
                      }}
                    />
                  </LocalizationProvider>
                  <Label>Type</Label>
                  <InputForm
                    id="type"
                    variant="outlined"
                    label="Type"
                    name={type}
                    value={el.type}
                    required
                    helperText={touchedType && errorType ? errorType : ''}
                    error={!!touchedType && !!errorType}
                    onChange={tiersInfo.handleChange}
                    onBlur={tiersInfo.handleBlur}
                    size="small"
                  />
                </Box>
              );
            })}
            <Button
              type="button"
              variant="outlined"
              onClick={() =>
                push({
                  tier: '',
                  contributionPct: 0,
                  minContribution: null,
                  reseedPct: 0,
                  seedAmount: null,
                  dropAt: new Date().toISOString(),
                  type: '',
                })
              }
            >
              Add tier
            </Button>
          </div>
        )}
      </FieldArray>
    </FormikProvider>
  </Box>
);

export default TiersStep;
