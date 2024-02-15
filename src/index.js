import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import worker from './mocks/browser';
import reportWebVitals from './reportWebVitals';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
