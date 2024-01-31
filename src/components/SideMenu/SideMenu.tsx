import routes from 'constants/routes';
import { DrawerUI as Drawer, LeftMenuLink } from './styles';

const SideMenu = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <LeftMenuLink to={routes.jackpots} end>Jackpots</LeftMenuLink>
      <LeftMenuLink to={routes.jackpotTierInstance}>Jackpots Tier Instance</LeftMenuLink>
      <LeftMenuLink to={routes.jackpotAudit}>Jackpot Audit</LeftMenuLink>
      <LeftMenuLink to={routes.jackpotTierInstanceAudit}>Jackpots Tier Instance Audit</LeftMenuLink>
    </Drawer>
  );
};

export default SideMenu;
