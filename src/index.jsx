import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './i18n.ts';
import {App} from './components/App/App.tsx';
import reportWebVitals from './reportWebVitals';
import store from './app/store.ts';
import EnvironmentProvider from './components/EnvironmentProvider.tsx';
import './index.scss';
import ThemeContextProvider from './contexts/ThemeContext.tsx';

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
