import React, { createContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { parseCookies, setCookie } from 'nookies';
import dark from '../styles/theme/dark';
import light from '../styles/theme/light';

const cookies = parseCookies();
const userTheme = cookies.USER_THEME;

const DEFAULT_VALUE = {
  theme: {
    title: userTheme,
    colors: userTheme === 'light' ? light.colors : dark.colors
  },
  toggleTheme: () => {}
};

export const Context = createContext(DEFAULT_VALUE);

export const ContextProvider: React.FC = ({ children }) => {
  useEffect(() => {
    setCookie(null, 'USER_THEME', 'light', {
      maxAge: 86400 * 7,
      path: '/'
    });
  }, []);
  const [theme, setTheme] = useState(DEFAULT_VALUE.theme);
  const toggleTheme = () => {
    if (theme.title === 'light') {
      setTheme(dark);
      setCookie(null, 'USER_THEME', 'dark', {
        maxAge: 86400 * 7,
        path: '/'
      });
    }

    if (theme.title === 'dark') {
      setTheme(light);
      setCookie(null, 'USER_THEME', 'light', {
        maxAge: 86400 * 7,
        path: '/'
      });
    }
  };
  return (
    <Context.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Context.Provider>
  );
};
