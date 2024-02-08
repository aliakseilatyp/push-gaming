import { Box, FormControl, Input, TextField } from '@mui/material';
import { FormikProps } from 'formik';
import { InputForm } from 'layouts/Form';
import { IScheduleInfo } from 'types/FormikTypes';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';
import dayjs from 'dayjs';
import { DATE_FORMAT } from 'constants/constants';

interface IScheduleStep {
  scheduleInfo: FormikProps<IScheduleInfo>;
}

const ScheduleStep = ({ scheduleInfo }: IScheduleStep) => (
  <Box margin="20px 0">
    <h3>Iterations</h3>
    <InputForm
      id="iterations"
      label="Iterations"
      name="iterations"
      variant="outlined"
      required
      value={scheduleInfo.values.iterations ?? ''}
      onChange={scheduleInfo.handleChange}
      error={!!scheduleInfo.touched.iterations && !!scheduleInfo.errors.iterations}
      helperText={
        scheduleInfo.touched.iterations && scheduleInfo.errors.iterations ? scheduleInfo.errors.iterations : ''
      }
      onBlur={scheduleInfo.handleBlur}
      size="small"
    />
    <h3>Start at</h3>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimeField
        label="Start at"
        format={DATE_FORMAT}
        value={dayjs(scheduleInfo.values.startAt)}
        disablePast
        slots={{
          textField: (params) => <InputForm {...params} />,
        }}
        slotProps={{
          textField: {
            variant: 'outlined',
            name: 'startAt',
            size: 'small',
            error: !!scheduleInfo.touched.startAt && !!scheduleInfo.errors.startAt,
            onBlur: scheduleInfo.handleBlur,
            helperText: scheduleInfo.touched.startAt && scheduleInfo.errors.startAt ? scheduleInfo.errors.startAt : '',
          },
        }}
        onChange={(newValue) => {
          if (newValue?.isValid()) {
            scheduleInfo.setFieldValue('startAt', newValue?.toISOString());
          }
        }}
      />
    </LocalizationProvider>
  </Box>
);

export default ScheduleStep;
