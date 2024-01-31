import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Roboto, sans-serif',
      textTransform: 'none',
      fontSize: 16,
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '8px',
          fontSize: '14px',
        },

      },
    },
    MuiTableContainer: {

      styleOverrides: {
        root: {
          borderRadius: '4px',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:last-child td, &:last-child th': { border: 0 },
          borderRadius: '4px',
        },
      },
    },
  },
});