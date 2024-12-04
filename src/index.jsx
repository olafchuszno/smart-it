// core
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
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
  <Provider store={store}>
    <AuthContextProvider>
      <ThemeContextProvider>
        <EnvironmentProvider>
          <App />
        </EnvironmentProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  </Provider>
);
