import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './i18n.ts';
import {App} from './components/App';
import store from './app/store.ts';
import EnvironmentProvider from './components/EnvironmentProvider.tsx';
import ThemeContextProvider from './contexts/ThemeContext.tsx';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeContextProvider>
    <EnvironmentProvider>
        <Provider store={store}>
          <App />
        </Provider>
    </EnvironmentProvider>
  </ThemeContextProvider>
);

