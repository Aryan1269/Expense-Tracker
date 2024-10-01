import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils/GlobalStyles";

const ExpensesSummary = ({ periodName, expenses }) => {

  let expenseSum = 0;
  for (let i = 0; i < expenses.length; i++) {
     expenseSum += expenses[i].amount;
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${+expenseSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container : {
    padding : 8,
    backgroundColor : colors.primary50,
    borderRadius : 6,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
  },
  period : {
    fontSize : 12,
    color : colors.primary400,
  },
  sum : {
    fontSize : 16,
    fontWeight : 'bold',
    color : colors.primary500
  }
})
