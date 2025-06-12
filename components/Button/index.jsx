import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const Button = ({ onPress, title = "Button" }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#112B11',
    color: '#FFF',
    width: 350,
    height: 47,
    alignItems: 'center',
    borderRadius: 8
  },
  text: {
    color: '#FFF',
    fontSize: 24,
    paddingTop: 7
  }
})