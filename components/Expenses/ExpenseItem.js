import { Pressable, StyleSheet, Text, TextBase, View } from "react-native";
import { colors } from "../../utils/GlobalStyles";
import { getFormattedDate } from "../../utils/date";
import { useNavigation } from "@react-navigation/native";


const ExpenseItem = ({ id, description, amount, date }) => {
 
  const navigation = useNavigation();

  function expensePressHandler() {
    navigation.navigate('ManageExpense',{
      expenseId : id,
    })
  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => (pressed ? styles.pressed : "")}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.TextBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.TextBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 9,
    backgroundColor: colors.primary100,
    flexDirection: "row",
    borderRadius: 8,
    justifyContent: "space-between",
    elevation: 3,
    shadowColor: colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  TextBase: {
    colors: colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  amount: {
    color: colors.primary500,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
