import { StyleSheet, View, Text } from "react-native";

export const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Desenvolvido durante a disciplina de Web Mobile - Curso de Análise e
        Desenvolvimento de Sistemas {"\n"}FPO - Faculdade Princesa do Oeste
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FFF',
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    color: '#112B11',
    textAlign: 'center',
    lineHeight: 16,
  },
});
