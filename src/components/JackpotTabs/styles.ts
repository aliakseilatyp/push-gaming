import { Tab, Tabs } from '@mui/material';
import styled from 'styled-components';

export const JackpotTabWrapper = styled.div`
  border: 1px solid;
  border-radius: 0 0 5px 5px;
  padding: 10px;
  min-height: 400px;
  box-shadow: 0px 0px 5px 6px #9d9d9d14;
`;

export const JackpotTabsWrapper = styled(Tabs)`
  .MuiTabs-flexContainer {
    gap: 5px;
  }
  .MuiTabs-indicator {
    height: 0;
  }
`;

export const CustomTab = styled(Tab)`
  &&.MuiButtonBase-root {
    border-radius: 5px 5px 0 0;
    border: 1px solid #000;
    border-bottom: none;
    font-size: 20px;
    &&.Mui-selected {
      border-bottom: none;
      color: #fff;
      background-color: #202939;
    }
  }
`;
