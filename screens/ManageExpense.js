import { useContext, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Iconbutton from "../ui/IconButton";
import { colors } from "../utils/GlobalStyles";
import Button from "../ui/Button";
import { ExpensesContext } from "../store/context";
import ExpenseForm from "../components/manageExpenese/ExpenseForm";
import { deleteExpense, storeExpense, updateExpense } from "../utils/http";
//curd operation
const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const expenseCtx = useContext(ExpensesContext);

  const defaultValues = expenseCtx.expenses.find(
    (expense) => expense.id == editedExpenseId
  );

  const [userInput, setUserInput] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : "",
    description: defaultValues ? defaultValues.description : "",
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  async function handledelete() {
    await  deleteExpense(editedExpenseId);
    expenseCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }
  function cancelhandler() {
    navigation.goBack();
  }

  async function confirmHandler() {
    const isamount = !isNaN(userInput.amount) && userInput.amount > 0;
    const isdatevalid = userInput.date.toString() !== "Invalid Date";
    const descriptionIsvalid = userInput.description.trim().length > 0;
    if (!isamount || !isdatevalid || !descriptionIsvalid) {
      Alert.alert("Invalid input", "please check your input");
      return;
    } else {
      if (isEditing) {
        expenseCtx.updateExpense(editedExpenseId, {
          description: userInput.description,
          amount: +userInput.amount,
          date: new Date(userInput.date),
        });
        await updateExpense(editedExpenseId, userInput);
      } else {
        const id = await storeExpense(userInput);
        expenseCtx.addExpense({
          ...userInput,
          id: id,
        });
      }
    }

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm userInput={userInput} setUserInput={setUserInput} />
      <View style={styles.btnView}>
        <Button style={styles.button} mode="flat" onPress={cancelhandler}>
          Cancel
        </Button>
        <Button mode="flat" style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <Iconbutton
            icon="trash"
            color={colors.error500}
            size={36}
            onPress={handledelete}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.primary800,
  },
  btnView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: colors.primary200,
    alignItems: "center",
  },
});
