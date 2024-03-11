import { Button, MenuItem, Stack } from '@mui/material';
import { FieldArray, FormikProps, FormikProvider, getIn } from 'formik';
import { Divider, InputContainer, InputForm, Label, SectionTitle, SelectForm, TitleContainer } from 'layouts/Form';
import { ICreateJackpot } from 'types/FormikTypes';

interface ITiersForm {
  jackpotInfo: FormikProps<ICreateJackpot> | FormikProps<Omit<ICreateJackpot, 'jackpotId'>>;
  disabled?: boolean;
}

const TiersForm = ({ jackpotInfo, disabled }: ITiersForm) => {
  return (
    <Stack direction="column" spacing={3}>
      <SectionTitle>Tiers</SectionTitle>
      <FormikProvider value={jackpotInfo}>
        <FieldArray name="tiers">
          {({ push, remove }) => (
            <>
              {jackpotInfo.values.tiers.map((el, index) => {
                const tierId = `tiers[${index}].tierId`;
                const errorTierId = getIn(jackpotInfo.errors, tierId);
                const touchedTierId = getIn(jackpotInfo.touched, tierId);

                const tierType = `tiers[${index}].tierType`;

                const migrationAmount = `tiers[${index}].migrationAmount`;
                const errorMigrationAmount = getIn(jackpotInfo.errors, migrationAmount);
                const touchedMigrationAmount = getIn(jackpotInfo.touched, migrationAmount);

                const seedAmount = `tiers[${index}].seedAmount`;
                const errorSeedAmount = getIn(jackpotInfo.errors, seedAmount);
                const touchedSeedAmount = getIn(jackpotInfo.touched, seedAmount);

                const contributionType = `tiers[${index}].contributionType`;

                const splitPct = `tiers[${index}].splitPct`;
                const errorSplitPct = getIn(jackpotInfo.errors, splitPct);
                const touchedSplitPct = getIn(jackpotInfo.touched, splitPct);

                const reseedPct = `tiers[${index}].reseedPct`;
                const errorReseedPct = getIn(jackpotInfo.errors, reseedPct);
                const touchedReseedPct = getIn(jackpotInfo.touched, reseedPct);

                const frequency = `tiers[${index}].config.frequency`;

                const winBy = `tiers[${index}].config.winBy`;
                const errorWinBy = getIn(jackpotInfo.errors, winBy);
                const touchedWinBy = getIn(jackpotInfo.touched, winBy);

                const rampUp = `tiers[${index}].config.rampUp`;
                const errorRampUp = getIn(jackpotInfo.errors, rampUp);
                const touchedRampUp = getIn(jackpotInfo.touched, rampUp);

                const average = `tiers[${index}].config.average`;
                const errorAverage = getIn(jackpotInfo.errors, average);
                const touchedAverage = getIn(jackpotInfo.touched, average);

                const max = `tiers[${index}].config.max`;
                const errorMax = getIn(jackpotInfo.errors, max);
                const touchedMax = getIn(jackpotInfo.touched, max);

                return (
                  <InputContainer key={index} direction="column" spacing={3}>
                    <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
                      <Label>Tier ID</Label>
                      <InputForm
                        id="tierId"
                        placeholder="Tier ID"
                        name={tierId}
                        variant="outlined"
                        required
                        value={el.tierId}
                        onChange={jackpotInfo.handleChange}
                        error={!!touchedTierId && !!errorTierId}
                        helperText={touchedTierId && errorTierId ? errorTierId : ''}
                        onBlur={jackpotInfo.handleBlur}
                        size="small"
                        disabled={disabled}
                      />
                    </InputContainer>
                    <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
                      <Label>Tier type</Label>
                      <SelectForm
                        labelId="tierType"
                        id="tierType"
                        name={tierType}
                        value={el.tierType}
                        onChange={jackpotInfo.handleChange}
                        size="small"
                        disabled={disabled}
                      >
                        <MenuItem value={'dt-time-trigger'}>dt-time-trigger</MenuItem>
                        <MenuItem value={'pb-time-trigger'}>pb-time-trigger</MenuItem>
                        <MenuItem value={'dt-value-trigger'}>dt-value-trigger</MenuItem>
                        <MenuItem value={'pb-value-trigger'}>pb-value-trigger</MenuItem>
                      </SelectForm>
                    </InputContainer>
                    <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
                      <Label>Override amount</Label>
                      <InputForm
                        id="migrationAmount"
                        placeholder="Override amount"
                        name={migrationAmount}
                        variant="outlined"
                        required
                        value={el.migrationAmount}
                        onChange={jackpotInfo.handleChange}
                        error={!!touchedMigrationAmount && !!errorMigrationAmount}
                        helperText={touchedMigrationAmount && errorMigrationAmount ? errorMigrationAmount : ''}
                        onBlur={jackpotInfo.handleBlur}
                        size="small"
                        type="number"
                        disabled={disabled}
                      />
                    </InputContainer>
                    <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
                      <Label>Seed amount</Label>
                      <InputForm
                        id="tierId"
                        placeholder="Seed amount"
                        name={seedAmount}
                        variant="outlined"
                        required
                        value={el.seedAmount}
                        onChange={jackpotInfo.handleChange}
                        error={!!touchedSeedAmount && !!errorSeedAmount}
                        helperText={touchedSeedAmount && errorSeedAmount ? errorSeedAmount : ''}
                        onBlur={jackpotInfo.handleBlur}
                        size="small"
                        type="number"
                        disabled={disabled}
                      />
                    </InputContainer>
                    <TitleContainer>Tier contribution</TitleContainer>
                    <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
                      <Label>Type</Label>
                      <SelectForm
                        labelId="contributionType"
                        id="contributionType"
                        name={contributionType}
                        value={el.contributionType}
                        onChange={jackpotInfo.handleChange}
                        size="small"
                        disabled={disabled}
                      >
                        <MenuItem value={'percentage'}>percentage</MenuItem>
                      </SelectForm>
                    </InputContainer>
                    <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
                      <Label>Split percentage</Label>
                      <InputForm
                        id="splitPct"
                        placeholder="Split percentage"
                        name={splitPct}
                        variant="outlined"
                        required
                        value={el.splitPct}
                        onChange={jackpotInfo.handleChange}
                        error={!!touchedSplitPct && !!errorSplitPct}
                        helperText={touchedSplitPct && errorSplitPct ? errorSplitPct : ''}
                        onBlur={jackpotInfo.handleBlur}
                        size="small"
                        type="number"
                        disabled={disabled}
                      />
                    </InputContainer>
                    <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
                      <Label>Reseed percentage </Label>
                      <InputForm
                        id="reseedPct"
                        placeholder="Override amount"
                        name={reseedPct}
                        variant="outlined"
                        required
                        value={el.reseedPct}
                        onChange={jackpotInfo.handleChange}
                        error={!!touchedReseedPct && !!errorReseedPct}
                        helperText={touchedReseedPct && errorReseedPct ? errorReseedPct : ''}
                        onBlur={jackpotInfo.handleBlur}
                        size="small"
                        type="number"
                        disabled={disabled}
                      />
                    </InputContainer>
                    <TitleContainer>Tier config</TitleContainer>
                    {el.tierType === 'dt-time-trigger' || el.tierType === 'pb-time-trigger' ? (
                      <>
                        <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
                          <Label>Frequency</Label>
                          <SelectForm
                            labelId="frequency"
                            id="frequency"
                            name={frequency}
                            value={el.config.frequency ?? 'daily'}
                            onChange={jackpotInfo.handleChange}
                            size="small"
                            disabled={disabled}
                          >
                            <MenuItem value={'daily'}>daily</MenuItem>
                          </SelectForm>
                        </InputContainer>
                        <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
                          <Label>Win by</Label>
                          <InputForm
                            size="small"
                            type="time"
                            id="winBy"
                            placeholder="Win by"
                            name={winBy ?? '00:00'}
                            variant="outlined"
                            required
                            value={el.config.winBy}
                            onChange={jackpotInfo.handleChange}
                            error={!!touchedWinBy && !!errorWinBy}
                            helperText={touchedWinBy && errorWinBy ? errorWinBy : ''}
                            onBlur={jackpotInfo.handleBlur}
                            disabled={disabled}
                          />
                        </InputContainer>
                        <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
                          <Label>Ramp up</Label>
                          <InputForm
                            size="small"
                            type="time"
                            id="rampUp"
                            placeholder="Ramp up"
                            name={rampUp ?? '00:00'}
                            variant="outlined"
                            required
                            value={el.config.rampUp}
                            onChange={jackpotInfo.handleChange}
                            error={!!touchedRampUp && !!errorRampUp}
                            helperText={touchedRampUp && errorRampUp ? errorRampUp : ''}
                            onBlur={jackpotInfo.handleBlur}
                            disabled={disabled}
                          />
                        </InputContainer>
                      </>
                    ) : (
                      <>
                        <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
                          <Label>Average</Label>
                          <InputForm
                            size="small"
                            type="number"
                            id="average"
                            placeholder="Average"
                            name={average}
                            variant="outlined"
                            required
                            value={el.config.average ?? 0}
                            onChange={jackpotInfo.handleChange}
                            error={!!touchedAverage && !!errorAverage}
                            helperText={touchedAverage && errorAverage ? errorAverage : ''}
                            onBlur={jackpotInfo.handleBlur}
                            disabled={disabled}
                          />
                        </InputContainer>
                        <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
                          <Label>Max</Label>
                          <InputForm
                            size="small"
                            type="number"
                            id="max"
                            placeholder="Max"
                            name={max}
                            variant="outlined"
                            required
                            value={el.config.max ?? 0}
                            onChange={jackpotInfo.handleChange}
                            error={!!touchedMax && !!errorMax}
                            helperText={touchedMax && errorMax ? errorMax : ''}
                            onBlur={jackpotInfo.handleBlur}
                            disabled={disabled}
                          />
                        </InputContainer>
                      </>
                    )}
                    <Button type="button" variant="outlined" onClick={() => remove(index)} color="error" disabled={disabled}>
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
                  style={{
                    alignSelf: 'end',
                  }}
                  onClick={() =>
                    push({
                      tierId: '',
                      tierType: 'dt-time-trigger',
                      migrationAmount: 0,
                      seedAmount: 0,
                      contributionType: 'percentage',
                      splitPct: 0,
                      reseedPct: 0,
                      config: {
                        frequency: 'daily',
                        winBy: '00:00',
                        rampUp: '00:00',
                        max: 0,
                        average: 0,
                      },
                    })
                  }
                  disabled={disabled}
                >
                  Add
                </Button>
              </InputContainer>
            </>
          )}
        </FieldArray>
      </FormikProvider>
    </Stack>
  );
};

export default TiersForm;
