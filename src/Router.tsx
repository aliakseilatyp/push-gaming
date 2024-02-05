import { lazy, ReactElement } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import AppWrapper from 'components/AppWrapper';
import ROUTES from 'constants/routes';

const Login = lazy(() => import('pages/Login'));
const Jackpots = lazy(() => import('pages/Jackpots'));
const JackpotDetails = lazy(() => import('pages/JackpotDetails'));
const JackpotAudit = lazy(() => import('pages/JackpotAudit'));
const JackpotAuditDetails = lazy(() => import('pages/JackpotAuditDetails'));
const JackpotTierInstance = lazy(() => import('pages/JackpotTierInstance'));
const JackpotTierInstanceDetails = lazy(() => import('pages/JackpotTierInstanceDetails'));
const JackpotTierInstanceAudit = lazy(() => import('pages/JackpotTierInstanceAudit'));
const TierInstanceAuditDetails = lazy(() => import('pages/TierInstanceAuditDetails'));
const CreateJackpot = lazy(() => import('pages/CreateJackpot'));

const routes: RouteObject[] = [
  {
    element: <AppWrapper />,

    children: [
      { path: ROUTES.login, element: <Login /> },
      {
        path: ROUTES.jackpots,
        children: [
          { path: ROUTES.jackpots, element: <Jackpots /> },
          { path: `${ROUTES.jackpots}/:id`, element: <JackpotDetails /> },
        ],
      },
      { path: ROUTES.createJackpot, element: <CreateJackpot /> },
      {
        path: ROUTES.jackpotAudit,
        children: [
          { path: ROUTES.jackpotAudit, element: <JackpotAudit /> },
          { path: `${ROUTES.jackpotAudit}/:id`, element: <JackpotAuditDetails /> },
        ],
      },
      {
        path: ROUTES.jackpotTierInstance,
        children: [
          { path: ROUTES.jackpotTierInstance, element: <JackpotTierInstance /> },
          { path: `${ROUTES.jackpotTierInstance}/:id`, element: <JackpotTierInstanceDetails /> },
        ],
      },
      {
        path: ROUTES.jackpotTierInstanceAudit,
        children: [
          { path: ROUTES.jackpotTierInstanceAudit, element: <JackpotTierInstanceAudit /> },
          { path: `${ROUTES.jackpotTierInstanceAudit}/:id`, element: <TierInstanceAuditDetails /> },
        ],
      },
    ],
  },
];

export default function Router(): ReactElement | null {
  return useRoutes(routes);
}
