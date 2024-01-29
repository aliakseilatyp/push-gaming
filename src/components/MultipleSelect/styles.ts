import { styled } from 'styled-components';
import FormControl from '@mui/material/FormControl';
import Chip from '@mui/material/Chip';

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


