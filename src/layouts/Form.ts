import { Button, Select, TextField } from '@mui/material';
import styled from 'styled-components';

export const InputForm = styled(TextField)`
  && {
    min-width: 300px;
    background: #ffffff;
  }
  && .MuiFormHelperText-root {
    margin-left: 0;
    margin-right: 0;
    font-size: 10px;
    position: absolute;
    bottom: -18px;
    margin-top: 2px;
  }
  && .Mui-error input {
    color: #d32f2f;
  }
`;

export const SelectForm = styled(Select)`
  min-width: 300px;
  background: #ffffff;
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

export const SectionTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  font-style: italic;
  padding: 10px;
  background-color: #81757540;
  border-radius: 5px;
`;



export const ClearButton = styled(Button)`
  && {
    min-width: 23px;
    padding: 0;
    position: absolute;
    right: -40px;
    top: 0;
    margin-top: 0;
  }
`;
