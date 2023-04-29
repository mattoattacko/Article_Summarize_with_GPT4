import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App.jsx';
import { store } from './services/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>    
  </React.StrictMode>,
)

//with Redux, we wrap our whole app with <Provider> and pass it the store (a global state). Then, we can access the store from any component in the app.
//the store is in /services 