import { act, createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  setExpenses: (expense) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [{ ...action.payload }, ...state];
    case "UPDATE":
      const updateableIndex = state.findIndex(
        (expense) => expense.id === action.payload.id // Use strict equality
      );

      if (updateableIndex < 0) {
        return state; // If not found, return current state
      }

      const updatedExpenses = [...state];
      updatedExpenses[updateableIndex] = {
        ...updatedExpenses[updateableIndex],
        ...action.payload.data,
      };

      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    case "SET":
      const inverted = action.payload.reverse();
      return inverted;
    default:
      return state;
  }
}

const ExpenseWrapper = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expenseReducer, []);

  function addExpense(expenseDaa) {
    dispatch({ type: "ADD", payload: expenseDaa });
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function setExpenses(expense) {
    dispatch({ type: "SET", payload: expense });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
    setExpenses: setExpenses,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpenseWrapper;
