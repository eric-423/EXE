import React, { createContext, useContext, useState, useEffect } from 'react';
import { applyTheme } from '@/lib/bootstrap-config';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: 'light' | 'dark' | 'system';
};

type ThemeProviderState = {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
};

const initialState: ThemeProviderState = {
  theme: 'light',
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    () => (localStorage.getItem('theme') as 'light' | 'dark') || 
    (defaultTheme === 'system' ? 'light' : defaultTheme)
  );

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (defaultTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';
      
      setTheme(systemTheme);
      localStorage.setItem('theme', systemTheme);
    } else {
      localStorage.setItem('theme', theme);
    }
    
    // Apply the theme
    applyTheme(theme === 'dark');
    
  }, [theme, defaultTheme]);

  const value = {
    theme,
    setTheme: (newTheme: 'light' | 'dark' | 'system') => {
      if (newTheme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
          .matches
          ? 'dark'
          : 'light';
        
        setTheme(systemTheme);
      } else {
        setTheme(newTheme);
      }
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};