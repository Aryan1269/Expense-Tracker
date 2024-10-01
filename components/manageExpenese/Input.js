import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../../utils/GlobalStyles";

const Input = ({ label, TextInputconfig }) => {
  let inputStyles = [styles.input];

  if (TextInputconfig && TextInputconfig.multiline) {
    inputStyles.push(styles.Multiline);
  }
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput  style={inputStyles} {...TextInputconfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 16,
  },
  label: {
    fontSize: 12,
    color: colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: colors.primary700,
  },
  Multiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
