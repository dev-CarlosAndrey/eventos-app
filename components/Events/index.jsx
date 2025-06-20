import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { IconTrash } from '../Icons'

export const Events = ({ item, onRemove }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.text}>{item.date}</Text>
      <TouchableOpacity onPress={() => onRemove(item.name)}>
        <IconTrash/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
    paddingVertical: 18,
    marginTop: 15,
    gap: 10,
    borderRadius: 8,
    marginBottom: 10,
    width: 355,
    height: 61,
  },
  text: {
    fontSize: 16, 
    color: '#021112', 
    fontWeight: 'bold',
    flex: 1,
  },
});