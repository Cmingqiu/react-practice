import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './style.css';
import { BrowserRouter, HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
    {/* <BrowserRouter> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
// ReactDom.render(<App />, document.getElementById('root'));
