import { lazy, ReactElement } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import AppWrapper from 'components/AppWrapper';
import ROUTES from 'constants/routes';

const Login = lazy(() => import('pages/Login'));
const Jackpots = lazy(() => import('pages/Jackpots'));
const JackpotAudit = lazy(() => import('pages/JackpotAudit'));
const JackpotTierInstance = lazy(() => import('pages/JackpotTierInstance'));
const JackpotTierInstanceAudit = lazy(() => import('pages/JackpotTierInstanceAudit'));

const routes: RouteObject[] = [
  {
    element: <AppWrapper />,

    children: [
      { path: ROUTES.login, element: <Login /> },
      { path: ROUTES.jackpot, element: <Jackpots /> },
      { path: ROUTES.jackpot, element: <JackpotAudit /> },
      { path: ROUTES.jackpot, element: <JackpotTierInstance /> },
      { path: ROUTES.jackpotTierInstanceAudit, element: <JackpotTierInstanceAudit /> },
    ],
  },
];

export default function Router(): ReactElement | null {
  return useRoutes(routes);
}
