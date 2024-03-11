import routes from 'constants/routes';
import { DrawerUI as Drawer, LeftMenuLink } from './styles';
import { useContext } from 'react';
import { Button } from '@mui/material';
import { KeycloackContext } from 'context/KeyckoakContext';

const SideMenu = () => {
  const { logout } = useContext(KeycloackContext);
  return (
    <Drawer variant="permanent" anchor="left">
      <LeftMenuLink to={routes.jackpots}>Jackpots</LeftMenuLink>
      <LeftMenuLink to={routes.jackpotTierInstance} end>
        Jackpot Tier Instance
      </LeftMenuLink>
      <LeftMenuLink to={routes.jackpotAudit} end>
        Jackpot Audit
      </LeftMenuLink>
      <LeftMenuLink to={routes.jackpotTierInstanceAudit} end>
        Jackpots Tier Instance Audit
      </LeftMenuLink>
      <Button onClick={logout}>Logout</Button>
    </Drawer>
  );
};

export default SideMenu;
