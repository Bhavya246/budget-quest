import React from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionsList from '../components/TransactionsList';

const BudgetTracker = () => {
  return (
    <div>
      <h2>Budget Tracker</h2>
      <TransactionForm />
      <TransactionsList />
      <p>Track your expenses and income here.</p>
    </div>
  );
};

export default BudgetTracker;