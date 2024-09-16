import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './chap02/class.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import MyHello from './chap03/Myhello';
// import EventBasic from './chap03/EventBasic';
import StateBasic from './StateBasic';

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <StateBasic init={0} />
  );


reportWebVitals(console.log);
