import '../styles/globals.css'
import '../assets/scss/style.scss'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppThemeProvider } from '../components/ThemeContext';
import { Provider } from 'react-redux';
import store from '../action/store';

const lightTheme = createTheme({
  plaette: {
    mode: 'light'
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppThemeProvider>
        <ThemeProvider theme={lightTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AppThemeProvider>
    </Provider>
  )
}

export default App
