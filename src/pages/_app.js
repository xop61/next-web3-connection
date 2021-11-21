import '../styles/globals.css'
import '../assets/scss/style.scss'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppThemeProvider } from '../components/ThemeContext';

const lightTheme = createTheme({
  plaette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App({ Component, pageProps }) {
  return (
    <AppThemeProvider>
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppThemeProvider>
  )
}

export default App
