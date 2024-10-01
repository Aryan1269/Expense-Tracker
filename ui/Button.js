import { Pressable, Text, View, StyleSheet } from "react-native";
import { colors } from "../utils/GlobalStyles";

const Button = ({ children, onPress, mode, style }) => {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => (pressed ? styles.pressed : "")}
      >
        <View style={[styles.button, mode == "flat" && styles.flat, style]}>
          <Text
            style={[styles.button, mode == "flat" && styles.flatText, style]}
          >
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: colors.primary100,
    borderRadius: 4,
  },
});
