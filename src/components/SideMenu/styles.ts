
import { Drawer } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const LeftMenuLink = styled(NavLink)`
  && {
    color: #ffffff;
    text-decoration: none;
    padding: 10px 15px;
    margin: 0 10px;
  }

  &.active {
    border: 1px solid rgba(255, 255, 255, 0.4);
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
  }
`;

export const DrawerUI = styled(Drawer)`
  width: 240px;
  flex-shrink: 0;
  & .MuiDrawer-paper {
    width: 240px;
    box-sizing: border-box;
    background: #101828;
    padding-top: 30px;
  }
`;
