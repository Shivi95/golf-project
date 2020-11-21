import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import {StateProvider} from './provider/StateProvider';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


