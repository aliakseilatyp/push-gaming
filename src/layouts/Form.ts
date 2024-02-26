import { Select, TextField } from '@mui/material';
import styled from 'styled-components';

export const InputForm = styled(TextField)`
  && {
    min-width: 300px;
  }
  && .MuiFormHelperText-root {
    margin-left: 0;
    font-size: 12px;
  }
  && .Mui-error input {
    color: #d32f2f;
  }
`;

export const SelectForm = styled(Select)`
  min-width: 300px;
  && + .MuiFormHelperText-root {
    margin-left: 0;
    font-size: 12px;
  }
`;

export const Label = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin: 10px 0 15px;
`;
