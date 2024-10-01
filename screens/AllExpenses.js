import { Text } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/context";

const AllExpenses = () => {
  const expenseCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expenseCtx.expenses}
      periodName={"Total"}
      fallbackText="no expenses found"
    />
  );
};

export default AllExpenses;
