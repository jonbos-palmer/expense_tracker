import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const incomeAmount = transactions
    .map((transaction) => transaction.amount)
    .filter((amount) => amount > 0)
    .reduce((a, b) => a + b);

  const expenseAmount = transactions
    .map((transaction) => transaction.amount)
    .filter((amount) => amount < 0)
    .reduce((a, b) => a + b);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${incomeAmount.toFixed(2)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${expenseAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};
