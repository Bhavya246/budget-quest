import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BudgetProvider } from './context/BudgetContext';

ReactDOM.render(
  <BudgetProvider>
    <App />
  </BudgetProvider>,
  document.getElementById('root')
);