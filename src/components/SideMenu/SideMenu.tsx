import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import routes from 'constants/routes';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

const SideMenu = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          background: 'rgb(25, 118, 210)',
          paddingTop: '30px',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItem disablePadding>
          <NavLink to={routes.jackpots} style={{ color: 'white', textDecoration: 'none' }}>
            <ListItemButton>
              <ListItemText primary={'Jackpots'} />
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink to={routes.jackpotAudit} style={{ color: 'white', textDecoration: 'none' }}>
            <ListItemButton>
              <ListItemText primary={'Jackpot Audit'} />
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink to={routes.jackpotTierInstance} style={{ color: 'white', textDecoration: 'none' }}>
            <ListItemButton>
              <ListItemText primary={'Jackpots Tier Instance'} />
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink to={routes.jackpotTierInstanceAudit} style={{ color: 'white', textDecoration: 'none' }}>
            <ListItemButton>
              <ListItemText primary={'Jackpots Tier Instance Audit'} />
            </ListItemButton>
          </NavLink>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideMenu;
