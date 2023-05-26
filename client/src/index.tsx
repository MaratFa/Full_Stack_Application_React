import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter } from 'react-router-dom';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import { Paths } from './paths';
import './index.css';


const router = createBrowserRouter ([
  {
    path: Paths.login
  }
])

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <h1>Hello world</h1>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
