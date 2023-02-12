import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './components/Counter'
import InputExample from './components/InputExample';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter/> */}
    <InputExample/>
  </React.StrictMode>
);

reportWebVitals();
