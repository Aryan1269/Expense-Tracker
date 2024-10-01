import { StyleSheet, Text, View } from "react-native";
import Input from "./Input"; // Assuming Input is a custom component
import { useState } from "react";

const ExpenseForm = ({ userInput, setUserInput  }) => {
  function handleUserInput(identifier, enteredValue) {
    setUserInput((prevState) => ({
      ...prevState,
      [identifier]: enteredValue,
    }));
  }

  return (
    <View style={styles.container}>
      <View>
        <Input
          label="Amount"
          TextInputconfig={{
            keyboardType: "decimal-pad",
            onChangeText: (value) => handleUserInput("amount", value),
            value: userInput.amount,
          }}
        />
        <Input
          label="Date"
          TextInputconfig={{
            placeholder: "yyyy-MM-DD",
            maxLength: 10,
            onChangeText: (value) => handleUserInput("date", value), // Use arrow function
            value: userInput.date,
          }}
        />
        <Input
          label="Description"
          TextInputconfig={{
            multiline: true,
            onChangeText: (value) => handleUserInput("description", value),
            value: userInput.description,
          }}
        />
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
