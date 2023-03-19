import React, { createContext, useEffect, useState } from 'react';
import { setCookie, parseCookies } from 'nookies';
import { ThemeProvider } from 'styled-components';
import dark from '../styles/theme/dark';
import light from '../styles/theme/light';

const DEFAULT_VALUE = {
  theme: light,
  toggleTheme: () => {}
};

export const Context = createContext(DEFAULT_VALUE);

export const ContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(DEFAULT_VALUE.theme);
  const toggleTheme = () => {
    if (theme.title === 'light') {
      setCookie(null, 'theme', 'dark');
      setTheme(dark);
    }

    if (theme.title === 'dark') {
      setCookie(null, 'theme', 'light');
      setTheme(light);
    }
  };

  useEffect(() => {
    const parsedCookies = parseCookies();
    if (parsedCookies) {
      setTheme(parsedCookies.theme === 'light' ? light : dark);
      return;
    }
    setTheme(light);
  }, []);

  return (
    <Context.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Context.Provider>
  );
};
