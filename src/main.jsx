import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './style.css';
/* router */
import { BrowserRouter, HashRouter } from 'react-router-dom';
/* store */
import { Provider } from 'react-redux';
import reduxStore from '@/store-redux';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={reduxStore}>
        <App />
      </Provider>
    </HashRouter>
    {/* <BrowserRouter> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
// ReactDom.render(<App />, document.getElementById('root'));
