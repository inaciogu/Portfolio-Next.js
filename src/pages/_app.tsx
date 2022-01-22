import NextNProgress from 'nextjs-progressbar';
import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { Context, ContextProvider } from '../context';
import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }) {
  const { theme } = useContext(Context);
  return (
    <ContextProvider>
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
    </ContextProvider>
  );
}

export default MyApp;
