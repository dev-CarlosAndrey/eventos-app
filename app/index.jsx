import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/Button";
import { Events } from "../components/Events";
import { Header } from "../components/Header";
import { router } from "expo-router";
import { Footer } from "../components/Footer";
import { useEvent } from "../context/EventContext";

  
export default function Index() {
  const {events, removeEvent} = useEvent();

  const handleEventRemove = (nome) => {
    Alert.alert("Aviso", `Remover evento ${nome}?`, [
      {
        text: "Sim",
        onPress: () =>
          removeEvent(nome)
      },
      { text: "Não", style: "cancel" },
    ]);
  };

  return (
    <View style={styles.container}>
      <Header title={"Meus Eventos"} />

      <FlatList
        data={events}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Events item={item} onRemove={handleEventRemove} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhum evento registrado.</Text>
        }
      />

      <View style={styles.button}>
        <Button
          title="Registrar Evento"
          onPress={() => router.navigate("/add-event")}
        />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    color: "#666",
    fontSize: 16,
  },
});
