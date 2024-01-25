import Drawer from '@mui/material/Drawer';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const LeftMenuLink = styled(NavLink)`
  && {
    color: #ffffff;
    text-decoration: none;
    padding: 10px 15px;
  }

  &.active {
    color: yellow;
  }

  &:hover {
    color: yellow;
  }
`;

export const DrawerUI = styled(Drawer)`
  width: 240px;
  flex-shrink: 0;
  & .MuiDrawer-paper  {
    width: 240px;
    box-sizing: border-box;
    background: rgb(25, 118, 210);
    padding-top: 30px;
  }
`;
