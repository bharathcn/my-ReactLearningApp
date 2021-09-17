import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Parent from './ParentComponent';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.Fragment>
  <React.StrictMode>
    <App />
    <Parent/>
  </React.StrictMode>
  </React.Fragment>,
  document.getElementById('root')
);

reportWebVitals();
