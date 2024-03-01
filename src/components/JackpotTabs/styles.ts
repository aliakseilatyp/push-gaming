import { Tab, Tabs } from '@mui/material';
import styled from 'styled-components';

export const JackpotTabWrapper = styled.div`
  border-radius: 0 0 12px 12px;
  padding: 10px;
  min-height: 400px;
  box-shadow: 0px 0px 5px 6px #9d9d9d14;
  background: #ffffff;
`;

export const JackpotTabsWrapper = styled(Tabs)`
  .MuiTabs-flexContainer {
    gap: 5px;
  }
&  .MuiTabs-indicator {
    display: flex;
    justify-content: center;
    background-color: transparent;

    & .MuiTabs-indicatorSpan {
      max-width: 40;
      width: 100%;
      background-color: #635ee7;
    }
  }
`;

export const CustomTab = styled(Tab)`
  &&.MuiButtonBase-root {
    font-size: 22px;
    color: #101828;
    background: #f3f5f8;
    &&.Mui-selected {
      color: #1976d2;
    }
  }
`;
