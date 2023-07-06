import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Navvbar } from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Body } from './content';
import { Coroousel } from './carosel';
import './App.css'
import { Connections } from './connections';
import { Connections2 } from './connection2';
import { Footer } from './footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navvbar/>
    <Body/>
    <Coroousel/>
    <Connections/>
    <Connections2/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
