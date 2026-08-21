// Context API

import React, { createContext, useContext } from 'react';

// Create the context
const ThemeContext = createContext('light');

// A deeply nested component
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button>Current theme: {theme}</button>;
}

function Toolbar() {
  return <ThemedButton />;
}

// The parent "provides" the value
function Theme() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

export default Theme;