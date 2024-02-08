import { FormikProps } from 'formik';
import { Box, FormControl, FormHelperText, InputLabel, MenuItem } from '@mui/material';
import { Label, SelectForm } from 'layouts/Form';
import { IJackpotTypesInfo } from 'types/FormikTypes';

interface IJackpotTypeStep {
  typeInfo: FormikProps<IJackpotTypesInfo>;
}

const JackpotTypeStep = ({ typeInfo }: IJackpotTypeStep) => (
  <Box margin='20px 0'>
    <Label>Jackpot type</Label>
    <FormControl required>
      <InputLabel id="select-label" size="small" error={!!typeInfo.errors.jackpotType}>
        Jackpot type
      </InputLabel>
      <SelectForm
        labelId="select-label"
        label="Jackpot type"
        value={typeInfo.values.jackpotType}
        onChange={typeInfo.handleChange}
        id="jackpotType"
        name="jackpotType"
        error={!!typeInfo.errors.jackpotType}
        size="small"
        required
      >
        <MenuItem value="daily-drop">daily-drop</MenuItem>
      </SelectForm>
      {!!typeInfo.errors.jackpotType && (
        <FormHelperText error={!!typeInfo.errors.jackpotType}>{typeInfo.errors.jackpotType}</FormHelperText>
      )}
    </FormControl>
  </Box>
);

export default JackpotTypeStep;
