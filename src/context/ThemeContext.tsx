import { createContext, useContext, type PropsWithChildren } from 'react';

type ThemeContextValue = { mode: 'light' | 'dark' };
const ThemeContext = createContext<ThemeContextValue>({ mode: 'light' });

export function ThemeProvider({ mode = 'light', children }: PropsWithChildren<{ mode?: ThemeContextValue['mode'] }>) {
  return <ThemeContext.Provider value={{ mode }}>{children}</ThemeContext.Provider>;
}

export function useAppTheme() {
  return useContext(ThemeContext);
}