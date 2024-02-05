import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from 'components/SideMenu';
import { Stack } from '@mui/material';
import { Wrapper } from './styles';

const AppWrapper = () => (
  <Stack direction="row">
    <SideMenu />
    <Wrapper>
      <Suspense fallback="...Loading">
        <Outlet />
      </Suspense>
    </Wrapper>
  </Stack>
);

export default AppWrapper;
