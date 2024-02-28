import { Box, Button, MenuItem, Select, Stack } from '@mui/material';
import { useFormik } from 'formik';
import { IScheduleForm } from 'types/FormikTypes';
import { scheduleValidationSchema } from 'validationSchemas';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Label } from 'layouts/Form';

const ScheduleTab = () => {
  const schedule = useFormik<IScheduleForm>({
    initialValues: {
      startTime: dayjs().add(1, 'h').toISOString(),
      stopTime: dayjs().add(1, 'h').toISOString(),
      suspend: 'never',
    },
    validationSchema: scheduleValidationSchema,
    onSubmit: () => {},
  });

  return (
    <Box sx={{ width: '100%' }}>
      <form noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
        <Stack direction="column" spacing={4} maxWidth="525px" margin="0 auto">
          <Stack direction="row" spacing={3} alignItems="center" justifyContent="end">
            <Label>Start time</Label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DateTimePicker']}>
                <DateTimePicker
                  label="Start time"
                  disablePast
                  value={dayjs(schedule.values.startTime)}
                  onChange={(newValue) => {
                    schedule.setFieldValue('startTime', newValue?.toISOString());
                  }}
                  sx={{
                    width: '300px',
                  }}
                  slotProps={{ textField: { size: 'small' } }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Stack>
          <Stack direction="row" spacing={3} alignItems="center" justifyContent="end">
            <Label>Suspend</Label>
            <Select
              labelId="suspend"
              id="suspend"
              name="suspend"
              value={schedule.values.suspend}
              onChange={schedule.handleChange}
              size="small"
              style={{ width: '300px' }}
            >
              <MenuItem value={'never'}>never</MenuItem>
              <MenuItem value={'after'}>after</MenuItem>
            </Select>
          </Stack>
          {schedule.values.suspend !== 'never' && (
            <Stack direction="row" spacing={3} alignItems="center" justifyContent="end">
              <Label>Stop time</Label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimePicker']}>
                  <DateTimePicker
                    label="Stop time"
                    disablePast
                    value={dayjs(schedule.values.stopTime)}
                    onChange={(newValue) => {
                      schedule.setFieldValue('stopTime', newValue?.toISOString());
                    }}
                    sx={{
                      width: '300px',
                    }}
                    slotProps={{ textField: { size: 'small' } }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Stack>
          )}
          <Button
            variant="contained"
            style={{ minWidth: '300px', alignSelf: 'center' }}
            onClick={() => {
              schedule.handleSubmit();
            }}
          >
            Save
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default ScheduleTab;
