import React from 'react';
import ReactDOM from 'react-dom/client';
import '@styles/normalize.scss';
import '@styles/fonts.module.scss';
import App from '@components/app/app';
import { StyledEngineProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { store } from '@/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>
);
