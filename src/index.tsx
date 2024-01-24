import { ThemeProvider, createTheme } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import routes from 'constants/routes';
import Router from './Router';
import 'styles/index.scss';

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

  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'Roboto, sans-serif',
        textTransform: 'none',
        fontSize: 16,
      },
    },
  });

  createRoot(rootNode).render(
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename={routes.login}>
          <Router />
        </BrowserRouter>
        {/* {isDevMode && <ReactQueryDevtools initialIsOpen={false} />} */}
      </QueryClientProvider>
    </ThemeProvider>,
  );
}
