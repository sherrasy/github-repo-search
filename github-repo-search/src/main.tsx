import React from 'react';
import ReactDOM from 'react-dom/client';
import '@styles/normalize.scss'
import '@styles/fonts.module.scss'
import App from '@components/app/app';
import { StyledEngineProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>
);
