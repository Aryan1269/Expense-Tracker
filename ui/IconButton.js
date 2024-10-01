import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Iconbutton = ({ icon, size, color, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => (pressed ? styles.pressed : "")}
    >
      <View style={styles.butctn}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
};

export default Iconbutton;

const styles = StyleSheet.create({
  butctn: {
    borderRadius: 24,
    padding: 6,
    margin: 10,
  },
  pressed: {
    opacity: 0.75,
  },
});
