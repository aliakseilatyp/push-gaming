import { Box, Slider, Stack } from '@mui/material';
import { FormikProps } from 'formik';
import { InputForm, Label } from 'layouts/Form';
import { IContributionsInfo } from 'types/FormikTypes';

interface IContributionsStep {
  contributionsInfo: FormikProps<IContributionsInfo>;
}

const ContributionsStep = ({ contributionsInfo }: IContributionsStep) => (
  <Box margin="20px 0">
    <Label>Amount</Label>
    <InputForm
      variant="outlined"
      label="Amount"
      name="amount"
      value={contributionsInfo.values.amount ?? ''}
      id="amount"
      required
      onChange={contributionsInfo.handleChange}
      error={!!contributionsInfo.touched.amount && !!contributionsInfo.errors.amount}
      helperText={
        contributionsInfo.touched.amount && contributionsInfo.errors.amount ? contributionsInfo.errors.amount : ''
      }
      onBlur={contributionsInfo.handleBlur}
      size="small"
      type='number'
    />
    <Box margin="20px 0">
      <Label>Player percentage</Label>
      <InputForm
        variant="outlined"
        label="Player percentage"
        name="playerPct"
        value={contributionsInfo.values.playerPct}
        id="playerPct"
        required
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (value) {
            contributionsInfo.setFieldValue('operatorPct', 100 - value);
          }
          contributionsInfo.setFieldValue('playerPct', value);
        }}
        error={!!contributionsInfo.touched.playerPct && !!contributionsInfo.errors.playerPct}
        helperText={
          contributionsInfo.touched.playerPct && contributionsInfo.errors.playerPct
            ? contributionsInfo.errors.playerPct
            : ''
        }
        onBlur={contributionsInfo.handleBlur}
        size="small"
        type='number'
      />
    </Box>
    <Stack direction="row" alignItems="center" spacing={3} maxWidth={300}>
      <div>Player</div>
      <Slider
        value={contributionsInfo.values.playerPct}
        step={1}
        min={0}
        max={100}
        valueLabelDisplay="auto"
        onChange={(_, value) => {
          contributionsInfo.setFieldValue('playerPct', value);
          contributionsInfo.setFieldValue('operatorPct', !Array.isArray(value) && 100 - value);
        }}
      />
      <div>Operator</div>
    </Stack>
    <Box margin="20px 0">
      <Label>Operator percentage</Label>
      <InputForm
        variant="outlined"
        label="Operator percentage"
        name="operatorPct"
        value={contributionsInfo.values.operatorPct}
        id="operatorPct"
        required
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (value) {
            contributionsInfo.setFieldValue('playerPct', 100 - value);
          }
          contributionsInfo.setFieldValue('operatorPct', value);
        }}
        error={!!contributionsInfo.touched.operatorPct && !!contributionsInfo.errors.operatorPct}
        helperText={
          contributionsInfo.touched.operatorPct && contributionsInfo.errors.operatorPct
            ? contributionsInfo.errors.operatorPct
            : ''
        }
        onBlur={contributionsInfo.handleBlur}
        size="small"
        type='number'
      />
    </Box>
    <Box margin="20px 0">
      <Label>Minimum wager</Label>
      <InputForm
        variant="outlined"
        label="Minimal wager"
        name="minWager"
        value={contributionsInfo.values.minWager ?? ''}
        id="minWager"
        required
        onChange={contributionsInfo.handleChange}
        error={!!contributionsInfo.touched.minWager && !!contributionsInfo.errors.minWager}
        helperText={
          contributionsInfo.touched.minWager && contributionsInfo.errors.minWager
            ? contributionsInfo.errors.minWager
            : ''
        }
        onBlur={contributionsInfo.handleBlur}
        size="small"
        type='number'
      />
    </Box>
    <Box margin="20px 0">
      <Label>House edge</Label>
      <InputForm
        variant="outlined"
        label="House edge"
        name="houseEdge"
        value={contributionsInfo.values.houseEdge ?? ''}
        id="houseEdge"
        required
        onChange={contributionsInfo.handleChange}
        error={!!contributionsInfo.touched.houseEdge && !!contributionsInfo.errors.houseEdge}
        helperText={
          contributionsInfo.touched.houseEdge && contributionsInfo.errors.houseEdge
            ? contributionsInfo.errors.houseEdge
            : ''
        }
        onBlur={contributionsInfo.handleBlur}
        size="small"
        type='number'
      />
    </Box>
  </Box>
);

export default ContributionsStep;
