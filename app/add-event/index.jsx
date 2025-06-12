import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Header } from "../../components/Header";
import { IconArrowBack } from "../../components/Icons";
import { Footer } from "../../components/Footer";
import { useRouter } from "expo-router";
import { Button } from "../../components/Button";
import { useState } from "react";
import { useEvent } from "../../context/EventContext";

export default function AddEvent() {
  const [eventName, setEventName] = useState("");
  const { events, addEvent } = useEvent();
  const router = useRouter();

  const handleAdd = () => {
    if (!eventName.trim()) {
      Alert.alert("Erro", "O nome do evento não pode estar vazio");
      return;
    }

    if (events.includes(eventName)) {
      Alert.alert("Aviso", "Já existe um evento com este nome");
      return;
    }

    addEvent(eventName);
    router.push("/");

  };

  return (
    <View style={styles.container}>
      <Header
        title={"Registrar Evento"}
        IconComponent={
          <TouchableOpacity onPress={() => router.navigate("/")}>
            <IconArrowBack />
          </TouchableOpacity>
        }
      />
      <View style={styles.content}>
        <TextInput
          style={styles.inputName}
          placeholder="Nome"
          placeholderTextColor="#555"
        ></TextInput>
        <TextInput
          style={styles.inputDate}
          placeholder="Data"
          placeholderTextColor="#555"
        ></TextInput>

        <Button title="Registrar" onPress={handleAdd} />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    gap: 20,
  },
  inputName: {
    backgroundColor: "#EDEDED",
    width: 350,
    height: 125,
    borderRadius: 8,
    marginTop: 20,
    padding: 16,
    textAlignVertical: "top",
  },
  inputDate: {
    backgroundColor: "#EDEDED",
    width: 350,
    height: 50,
    padding: 16,
  },
});
