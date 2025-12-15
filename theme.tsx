import { createTheme } from '@mui/material/styles';
export const theme = createTheme({  
  palette: {
    mode: 'dark',
  },
  typography: {
    allVariants: {
      color: 'var(--text-primary)',
    },
  },
});