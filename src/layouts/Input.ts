import { styled } from 'styled-components';
import { Stack, TextField } from '@mui/material';

export const Input = styled(TextField)`
  && .MuiInputBase-input {
    padding-top: 9.5px;
  }
`;

export const InputContainer = styled(Stack)`
  width: 525px;
`;

export const FieldContainer = styled(InputContainer)`
  position: relative;
  padding-bottom: 20px;
  border-bottom: 1px solid #81757540;
`;

export const TitleContainer = styled(InputContainer)`
  text-align: end;
  font-weight: 500;
  font-size: 18px;
  padding-right: 125px;
  box-sizing: border-box;
`;
