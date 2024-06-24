import React, { useState, useContext } from 'react';
import BudgetContext from '../context/BudgetContext';

const TransactionForm = () => {
  const { addTransaction } = useContext(BudgetContext);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('income');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !description) return;

    const transaction = {
      id: Date.now(),
      amount: parseFloat(amount),
      description,
      type,
    };

    addTransaction(transaction);
    setAmount('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Description
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Amount
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Type
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </label>
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;