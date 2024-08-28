import React, { createContext, useState, useContext } from 'react';
import { Appearance } from 'react-native';
 
const ThemeContext = createContext();
 
export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(Appearance.getColorScheme() === 'dark');
 
  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };
 
  return (
<ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
</ThemeContext.Provider>
  );
};
 
export const useTheme = () => useContext(ThemeContext);