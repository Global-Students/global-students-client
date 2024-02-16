import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './locales/i18n';
import worker from './mocks/browser';
import Routes from './pages/Routes';
import reportWebVitals from './reportWebVitals';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
);

reportWebVitals();
