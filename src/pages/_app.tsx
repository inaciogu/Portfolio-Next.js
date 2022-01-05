import { ThemeProvider } from 'styled-components';
import NextNProgress from 'nextjs-progressbar';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from '../components/Header';
import GlobalStyles from '../styles/global';
import light from '../styles/theme/light';
import dark from '../styles/theme/dark';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(dark);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <NextNProgress
        color={theme.colors.primary}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
