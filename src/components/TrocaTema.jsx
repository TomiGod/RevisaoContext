import React from 'react';
import { Button } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
 
const TrocaTema = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
 
  return (
<Button
      title={isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      onPress={toggleTheme}
    />
  );
};
 
export default TrocaTema;