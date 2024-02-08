import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Box, Button, Stack, Step, StepLabel, Stepper } from '@mui/material';
import {
  contributionsInfoValidationSchema,
  currenciesInfoValidationSchema,
  integrationsInfoValidationSchema,
  scheduleInfoValidationSchema,
  tiersInfoValidationSchema,
  typeInfoValidationSchema,
} from 'validationSchemas';
import JackpotTypeStep from 'components/JackpotTypeStep';
import {
  IContributionsInfo,
  ICurrenciesInfo,
  IIntegrationsInfo,
  IJackpotTypesInfo,
  IScheduleInfo,
  ITiersInfo,
} from 'types/FormikTypes';
import CurrencyStep from 'components/CurrencyStep';
import ContributionsStep from 'components/ContributionsStep';
import IntegrationsStep from 'components/IntegrationsStep';
import ScheduleStep from 'components/ScheduleStep';
import TiersStep from 'components/TiersStep';
import ConfirmationFormModal from 'components/ConfirmationFormModal';

const steps = ['Jackpot type', 'Currency', 'Contributions', 'Integrations', 'Schedule', 'Tiers'];

const CreateJackpot = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const typeInfo = useFormik<IJackpotTypesInfo>({
    initialValues: {
      jackpotType: '',
    },
    validationSchema: typeInfoValidationSchema,
    onSubmit: () => {
      handleNext();
    },
  });

  const currenciesInfo = useFormik<ICurrenciesInfo>({
    initialValues: {
      baseCurrency: '',
      currencies: [],
    },
    validationSchema: currenciesInfoValidationSchema,
    onSubmit: () => {
      handleNext();
    },
  });

  const contributionsInfo = useFormik<IContributionsInfo>({
    initialValues: {
      amount: null,
      operatorPct: 0,
      playerPct: 100,
      minWager: null,
      houseEdge: null,
    },
    validationSchema: contributionsInfoValidationSchema,
    onSubmit: () => {
      handleNext();
    },
  });

  const integrationsInfo = useFormik<IIntegrationsInfo>({
    initialValues: {
      games: [],
      igpCodes: [],
    },
    validationSchema: integrationsInfoValidationSchema,
    onSubmit: () => {
      handleNext();
    },
  });

  const scheduleInfo = useFormik<IScheduleInfo>({
    initialValues: {
      iterations: null,
      startAt: new Date().toISOString(),
    },
    validationSchema: scheduleInfoValidationSchema,
    onSubmit: () => {
      handleNext();
    },
  });

  const tiersInfo = useFormik<ITiersInfo>({
    initialValues: {
      tiers: [],
    },
    validationSchema: tiersInfoValidationSchema,
    onSubmit: () => {},
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <JackpotTypeStep typeInfo={typeInfo} />;
      case 1:
        return <CurrencyStep currenciesInfo={currenciesInfo} />;
      case 2:
        return <ContributionsStep contributionsInfo={contributionsInfo} />;
      case 3:
        return <IntegrationsStep integrationsInfo={integrationsInfo} />;
      case 4:
        return <ScheduleStep scheduleInfo={scheduleInfo} />;
      case 5:
        return <TiersStep tiersInfo={tiersInfo} />;
      default:
        return 'Unknown step';
    }
  };

  const handleSubmit = () => {
    switch (activeStep) {
      case 0:
        typeInfo.handleSubmit();
        break;
      case 1:
        currenciesInfo.handleSubmit();
        break;
      case 2:
        contributionsInfo.handleSubmit();
        break;
      case 3:
        integrationsInfo.handleSubmit();
        break;
      case 4:
        scheduleInfo.handleSubmit();
        break;
      case 5:
        tiersInfo.handleSubmit();
        break;
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <form noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {getStepContent(activeStep)}
          <Stack direction="row" spacing={2} marginTop={3}>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            {activeStep === steps.length - 1 ? (
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  handleSubmit();
                  if (!tiersInfo.errors.tiers?.length) {
                    handleClickOpen();
                  }
                }}
              >
                Finish
              </Button>
            ) : (
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Next
              </Button>
            )}
          </Stack>
          <ConfirmationFormModal
            open={open}
            handleClose={handleClose}
            typeInfo={typeInfo.values}
            currenciesInfo={currenciesInfo.values}
            contributionsInfo={contributionsInfo.values}
            integrationsInfo={integrationsInfo.values}
            scheduleInfo={scheduleInfo.values}
            tiersInfo={tiersInfo.values}
          />
        </div>
      </form>
    </Box>
  );
};

export default CreateJackpot;
