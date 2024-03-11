import { Box, Button, MenuItem, Stack } from '@mui/material';
import { useFormik } from 'formik';
import { IScheduleForm } from 'types/FormikTypes';
import { scheduleValidationSchema } from 'validationSchemas';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { InputContainer, Label, SectionTitle, SelectForm } from 'layouts/Form';
import { useContext } from 'react';
import { KeycloackContext } from 'context/KeyckoakContext';
import { ROLES } from 'constants/roles';

const ScheduleTab = () => {
  const { keycloackValue } = useContext(KeycloackContext);
  const isAdmin = keycloackValue?.realmAccess?.roles.includes(ROLES.admin);

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
          <SectionTitle>Schedule (set in UTC)</SectionTitle>
          <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
            <Label>Start time</Label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DateTimePicker']}>
                <DateTimePicker
                  disabled={!isAdmin}
                  disablePast
                  format="YYYY-MM-DD"
                  value={dayjs(schedule.values.startTime)}
                  onChange={(newValue) => {
                    schedule.setFieldValue('startTime', newValue?.toISOString());
                  }}
                  sx={{
                    width: '300px',
                  }}
                  slotProps={{ textField: { size: 'small', style: { background: '#fff' } } }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </InputContainer>
          <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
            <Label>Suspend</Label>
            <SelectForm
              labelId="suspend"
              id="suspend"
              name="suspend"
              value={schedule.values.suspend}
              onChange={schedule.handleChange}
              size="small"
              style={{ width: '300px' }}
              disabled={!isAdmin}
            >
              <MenuItem value={'never'}>never</MenuItem>
              <MenuItem value={'after'}>after</MenuItem>
            </SelectForm>
          </InputContainer>
          {schedule.values.suspend !== 'never' && (
            <InputContainer direction="row" spacing={3} alignItems="center" justifyContent="end">
              <Label>Stop time</Label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimePicker']}>
                  <DateTimePicker
                    disabled={!isAdmin}
                    disablePast
                    format="YYYY-MM-DD"
                    value={dayjs(schedule.values.stopTime)}
                    onChange={(newValue) => {
                      schedule.setFieldValue('stopTime', newValue?.toISOString());
                    }}
                    sx={{
                      width: '300px',
                    }}
                    slotProps={{ textField: { size: 'small', style: { background: '#fff' } } }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </InputContainer>
          )}
          {isAdmin && (
            <Stack direction="row" spacing={4} justifyContent="space-between">
              <Button variant="outlined" color="error" style={{ width: '100%' }}>
                Delete
              </Button>
              <Button
                variant="contained"
                style={{ width: '100%', backgroundColor: '#264274' }}
                onClick={() => {
                  schedule.handleSubmit();
                }}
              >
                Save
              </Button>
            </Stack>
          )}
        </Stack>
      </form>
    </Box>
  );
};

export default ScheduleTab;
