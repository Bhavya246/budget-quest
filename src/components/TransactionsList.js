import React, { useContext } from 'react';
import BudgetContext from '../context/BudgetContext';

const TransactionsList = () => {
  const { transactions } = useContext(BudgetContext);

  return (
    <div>
      <h3>Transactions</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description}: {transaction.type} ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsList;