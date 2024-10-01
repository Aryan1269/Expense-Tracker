import { Text } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/context";
import { getDateMinusDays } from "../utils/date";
import { fetchExpense } from "../utils/http";

const RecentExpenses = () => {
  const expenseCtx = useContext(ExpensesContext);
  // const [fetchExpenses, setfechExpenses] = useState([]);
  const today = new Date();
  const date7 = getDateMinusDays(today, 7);

  useEffect(() => {
    async function getExpense() {
      const expenses = await fetchExpense();
      expenseCtx.setExpenses(expenses);
    }
    getExpense();
  }, []);

  if(!fetchExpense){
    return <Text>Loading</Text>
  }

  const RecentExpenses = expenseCtx.expenses.filter((expense) => {
    return expense.date > date7;
  });

  return (
    <ExpensesOutput
      expenses={RecentExpenses}
      periodName="recent"
      fallbackText="No expenses register last 7 days"
    />
  );
};

export default RecentExpenses;
