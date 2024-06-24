import React, { createContext, useState } from 'react';

const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <BudgetContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </BudgetContext.Provider>
  );
};

export default BudgetContext;