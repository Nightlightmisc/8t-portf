import React from 'react';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';
import '@fontsource/jetbrains-mono/400.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ColorSchemeScript defaultColorScheme="light" />
          <MantineProvider
            theme={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSizes: {
                xs: '11px',
                sm: '12px',
                md: '13px',
                lg: '15px',
                xl: '17px',
              },
            }}
          >
      <App />
    </MantineProvider>
  </React.StrictMode>
);

