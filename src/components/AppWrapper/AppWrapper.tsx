import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper } from './styles';
import SideMenu from 'components/SideMenu';
import { Container } from '@mui/material';

const AppWrapper = () => (
  <Wrapper>
    <SideMenu />
    <Container>
      <Suspense fallback="...Loading">
        <Outlet />
      </Suspense>
    </Container>
  </Wrapper>
);

export default AppWrapper;
