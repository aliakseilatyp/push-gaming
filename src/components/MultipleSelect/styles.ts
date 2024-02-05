import { Chip, FormControl } from '@mui/material';
import { styled } from 'styled-components';

export const FormControlWrapper = styled(FormControl)`
  && {
    min-width: 300px;
  }
`;

export const StatusChip = styled(Chip)`
  && {
    height: 25px;
  }
`;
