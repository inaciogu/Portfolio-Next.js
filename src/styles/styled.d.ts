import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      backgroundLight: string;
      primary: string;
      secondary: string;
      gradient: string;
      backgroundGradient: string;
      text: string;
      textHighlight: string;
      textLight: string;
      border: string;
      inputBackground: string;
      error: string;
    };
  }
}
