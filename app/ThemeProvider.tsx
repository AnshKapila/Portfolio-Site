"use client";
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext<{ 
  isHeroBright: boolean; 
  setIsHeroBright: (v: boolean) => void 
}>({ isHeroBright: false, setIsHeroBright: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isHeroBright, setIsHeroBright] = useState(false);
  return <ThemeContext.Provider value={{ isHeroBright, setIsHeroBright }}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
