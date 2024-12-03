// core
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './i18n.ts';
// components
import { App } from './components/App';
import EnvironmentProvider from './components/EnvironmentProvider.tsx';
// state
import ThemeContextProvider from './contexts/ThemeContext.tsx';
import AuthContextProvider from './contexts/AuthContext.tsx';
import store from './app/store.ts';
// styles
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <ThemeContextProvider>
        <EnvironmentProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </EnvironmentProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </AuthContextProvider>
);
