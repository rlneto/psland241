import { createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

// Supondo que você tenha os arquivos de fonte Koho localmente
import KohoRegularWoff2 from './path-to-your-fonts/Koho-Regular.woff2';

// Crie um tema com a fonte Koho
const theme = createTheme({
  typography: {
    fontFamily: 'Koho, Arial, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Koho';
          font-style: normal;
          font-weight: 400;
          src: local('Koho'), url(${KohoRegularWoff2}) format('woff2');
        }
      `,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* O restante do seu aplicativo */}
    </ThemeProvider>
  );
}

export default App;
