// TODO: need check 'styles' imports
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import routes from 'constants/routes';
import Router from './Router';

const rootNode = document.getElementById('root');

if (rootNode) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });

  createRoot(rootNode).render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={routes.login}>
        <Router />
      </BrowserRouter>
      {/* {isDevMode && <ReactQueryDevtools initialIsOpen={false} />} */}
    </QueryClientProvider>,
  );
}
