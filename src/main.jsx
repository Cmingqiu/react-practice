import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import '@/styles';
/* router */
import { BrowserRouter, HashRouter } from 'react-router-dom';
/* store */
import { Provider } from 'react-redux';
import reduxStore, { persistor } from '@/store-redux';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={reduxStore}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </HashRouter>
    {/* <BrowserRouter> */}
  </React.StrictMode>
);
// ReactDom.render(<App />, document.getElementById('root'));
