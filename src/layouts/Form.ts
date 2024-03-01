import { Button, Select, Stack, TextField } from '@mui/material';
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

export const InputIntegration = styled(InputForm)`
  && {
    width: 100%;
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
  max-width: 525px;
`;

export const ClearButton = styled(Button)`
  && {
    min-width: 23px;
  }
`;

export const Divider = styled.div`
  height: 2px;
  width: 100%;
  background: #81757540;
`;

export const InputContainer = styled(Stack)`
  width: 525px;
`;

export const TitleContainer = styled(InputContainer)`
  align-self: center;
  font-weight: 500;
  font-size: 20px;
  width: 50%;
  text-align: center;
  background-color: #81757540;
  border-radius: 5px;
`;
