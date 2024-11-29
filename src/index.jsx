import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import {App} from './components/App/App.tsx';
import reportWebVitals from './reportWebVitals';
import store from './app/store.ts';
import './index.scss';
import './i18n.ts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
