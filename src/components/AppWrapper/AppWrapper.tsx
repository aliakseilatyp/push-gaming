import { Suspense, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from 'components/SideMenu';
import { CircularProgress, Stack } from '@mui/material';
import { Wrapper } from './styles';
import { KeycloackContext } from 'context/KeyckoakContext';
import ScreenSaver from 'components/ScreenSaver';

const AppWrapper = () => {
  const { keycloackValue, authenticated } = useContext(KeycloackContext);

  return keycloackValue && authenticated ? (
    <Stack direction="row">
      <SideMenu />
      <Wrapper>
        <Suspense fallback={<CircularProgress color="primary" />}>
          <Outlet />
        </Suspense>
      </Wrapper>
    </Stack>
  ) : (
    <ScreenSaver />
  );
};

export default AppWrapper;
