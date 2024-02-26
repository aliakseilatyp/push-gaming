import { Box, Button, Checkbox, FormControlLabel, Stack } from '@mui/material';
import { FormikProps, FormikProvider, FieldArray, getIn } from 'formik';
import { InputForm, Label } from 'layouts/Form';
import { IIntegrationsInfo } from 'types/FormikTypes';
import ClearIcon from '@mui/icons-material/Clear';

interface IIntegrationsStep {
  integrationsInfo: FormikProps<IIntegrationsInfo>;
}

const IntegrationsStep = ({ integrationsInfo }: IIntegrationsStep) => (
  <Box margin="20px 0">
    <FormikProvider value={integrationsInfo}>
      <Label>Games</Label>
      <FieldArray name="games">
        {({ push, remove }) => (
          <div>
            {integrationsInfo.values.games.map((el, index) => {
              const game = `games[${index}].game`;
              const errorGame = getIn(integrationsInfo.errors, game);
              const touchedGame = getIn(integrationsInfo.touched, game);
              const enabled = `games[${index}].enabled`;

              return (
                <Stack direction="row" alignItems="start" spacing={2} margin="10px 0" key={index}>
                  <InputForm
                    id="game"
                    variant="outlined"
                    label="Game"
                    name={game}
                    value={el.game}
                    required
                    helperText={touchedGame && errorGame ? errorGame : ''}
                    error={!!touchedGame && !!errorGame}
                    onChange={integrationsInfo.handleChange}
                    onBlur={integrationsInfo.handleBlur}
                    size="small"
                  />
                  <FormControlLabel
                    required
                    control={<Checkbox checked={el.enabled} onChange={integrationsInfo.handleChange} name={enabled} />}
                    label="Enabled"
                  />
                  <Button type="button" variant="outlined" onClick={() => remove(index)}>
                    <ClearIcon />
                  </Button>
                </Stack>
              );
            })}
            <Button type="button" variant="outlined" onClick={() => push({ game: '', enabled: false })}>
              Add game
            </Button>
          </div>
        )}
      </FieldArray>
    </FormikProvider>
    <FormikProvider value={integrationsInfo}>
      <Label>IGP codes</Label>
      <FieldArray name="igpCodes">
        {({ push, remove }) => (
          <div>
            {integrationsInfo.values.igpCodes.map((el, index) => {
              const igp = `igpCodes[${index}].igp`;
              const errorIGP = getIn(integrationsInfo.errors, igp);
              const touchedIGP = getIn(integrationsInfo.touched, igp);
              const enabled = `igpCodes[${index}].enabled`;

              return (
                <Stack direction="row" alignItems="start" spacing={2} margin="10px 0" key={index}>
                  <InputForm
                    id="igp"
                    variant="outlined"
                    label="IGP"
                    name={igp}
                    value={el.igp}
                    required
                    helperText={touchedIGP && errorIGP ? errorIGP : ''}
                    error={!!touchedIGP && !!errorIGP}
                    onChange={integrationsInfo.handleChange}
                    onBlur={integrationsInfo.handleBlur}
                    size="small"
                  />
                  <FormControlLabel
                    required
                    control={<Checkbox checked={el.enabled} onChange={integrationsInfo.handleChange} name={enabled} />}
                    label="Enabled"
                  />
                  <Button type="button" variant="outlined" onClick={() => remove(index)}>
                    <ClearIcon />
                  </Button>
                </Stack>
              );
            })}
            <Button type="button" variant="outlined" onClick={() => push({ igp: '', enabled: false })}>
              Add IGP
            </Button>
          </div>
        )}
      </FieldArray>
    </FormikProvider>
  </Box>
);

export default IntegrationsStep;
