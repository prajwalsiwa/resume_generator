import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Popper from '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


