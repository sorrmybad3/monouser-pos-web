import '@mantine/core/styles.css';

import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { AuthProvider } from './wrappers/providers/auth.provider';
import { ReactQueryProvider } from './wrappers/providers/query.provider';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <ReactQueryProvider>
        <BrowserRouter>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </BrowserRouter>
      </ReactQueryProvider>
    </MantineProvider>
  );
}
