import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './chap02/class.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import MyHello from './chap03/Myhello';
import EventBasic from './chap03/EventBasic';

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <EventBasic type="d" />
  );


reportWebVitals(console.log);
