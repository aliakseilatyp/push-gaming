import routes from 'constants/routes';
import { DrawerUI as Drawer, LeftMenuLink } from './styles';

const SideMenu = () => {
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
    </Drawer>
  );
};

export default SideMenu;
