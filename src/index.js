import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux'
import {PersistGate} from "redux-persist/integration/react";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store, persistor} from './app/store'
import ShowHomework from "./Homework/19exercise";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
                 <BrowserRouter>
                     <ShowHomework/>
               </BrowserRouter>
          </PersistGate>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
