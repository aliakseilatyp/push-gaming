import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CustomTab, JackpotTabWrapper, JackpotTabsWrapper } from './styles';
import ConfigTab from './ConfigTab';
import ScheduleTab from './ScheduleTab';
import IntegrationsTab from './IntegrationsTab';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <JackpotTabWrapper
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'span'} variant={'body2'}>
            {children}
          </Typography>
        </Box>
      )}
    </JackpotTabWrapper>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const JackpotTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box>
        <JackpotTabsWrapper value={value} onChange={handleChange} aria-label="basic tabs example" variant="fullWidth">
          <CustomTab label="Config" {...a11yProps(0)} />
          <CustomTab
            label="Schedule (set in UTC)
"
            {...a11yProps(1)}
          />
          <CustomTab label="Integrations" {...a11yProps(2)} />
          <CustomTab label="Tiers" {...a11yProps(3)} />
        </JackpotTabsWrapper>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ConfigTab />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ScheduleTab />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <IntegrationsTab />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Tiers
      </CustomTabPanel>
    </Box>
  );
};

export default JackpotTabs;
