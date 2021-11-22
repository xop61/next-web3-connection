import '../assets/scss/style.scss'
import { AppThemeProvider } from '../components/ThemeContext';
import { Provider } from 'react-redux';
import store from '../action/store';

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppThemeProvider>
        <Component {...pageProps} />
      </AppThemeProvider>
    </Provider>
  )
}

export default App
