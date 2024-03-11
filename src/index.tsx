import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import routes from 'constants/routes';
import Router from './Router';
import 'styles/index.scss';
import { theme } from 'styles/theme';
import { KeycloackContextProvider } from 'context/KeyckoakContext';

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
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <KeycloackContextProvider>
          <BrowserRouter basename={routes.jackpots}>
            <Router />
          </BrowserRouter>
        </KeycloackContextProvider>
        {/* {isDevMode && <ReactQueryDevtools initialIsOpen={false} />} */}
      </QueryClientProvider>
    </ThemeProvider>,
  );
}
