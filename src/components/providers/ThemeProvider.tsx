'use client';

import { createContext, useCallback, useContext, useSyncExternalStore } from 'react';

export type Theme = 'blue' | 'gold' | 'green';

export const themes: Theme[] = ['blue', 'gold', 'green'];
export const THEME_STORAGE_KEY = 'sabilabs-theme';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const themeListeners = new Set<() => void>();
let currentTheme: Theme = 'blue';

function subscribeToTheme(listener: () => void) {
  themeListeners.add(listener);
  return () => themeListeners.delete(listener);
}

function getThemeSnapshot(): Theme {
  const documentTheme = document.documentElement.getAttribute('data-theme');
  if (themes.includes(documentTheme as Theme)) currentTheme = documentTheme as Theme;
  return currentTheme;
}

function getServerThemeSnapshot(): Theme {
  return 'blue';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);

  const setTheme = useCallback((nextTheme: Theme) => {
    currentTheme = nextTheme;
    document.documentElement.setAttribute('data-theme', nextTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    themeListeners.forEach((listener) => listener());
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
