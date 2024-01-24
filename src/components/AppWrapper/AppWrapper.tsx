import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper } from './styles';

const AppWrapper = () => (
  <Wrapper>
    <Suspense fallback="...Loading">
      <Outlet />
    </Suspense>
  </Wrapper>
);

export default AppWrapper;
