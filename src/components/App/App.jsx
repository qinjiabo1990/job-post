'use client';

import { ThemeProvider } from 'styled-components';
import { AppProvider } from '../../context/appContext';

const light = {
  colors: {
    primary: 'rgb(44, 177, 188)',
    secondary: '#87eaf2',
    gray: 'rgb(72, 101, 129)',
  },
  borderRadius: '2px',
};

// dark theme
const dark = {
  colors: {
    primary: 'blue',
    secondary: 'rgba(44, 177, 188, 0.8)',
    gray: 'rgb(72, 101, 129)',
  },
  borderRadius: '2px',
};

function App({ children }) {
  return (
    <ThemeProvider theme={light}>
      <AppProvider>
        {children}
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
