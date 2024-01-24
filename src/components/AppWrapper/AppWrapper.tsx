import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const AppWrapper = () => (
  <div>
    <Suspense fallback="...Loading">
      <Outlet />
    </Suspense>
  </div>
);

export default AppWrapper;
