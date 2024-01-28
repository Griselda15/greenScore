import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import LottieView from "lottie-react-native";
import useFetch from "../fetch";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Simuler une connexion rÃ©ussie et naviguer directement vers la HomePage
    useFetch({ fUsrName:  username , fPassword:  password  });
    navigation.navigate("QuestionCard");
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/login.json")}
        autoPlay
        loop
        style={styles.lottie}
      />
      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Se Connecter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bbde76",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100, // Espace pour le logo
    paddingHorizontal: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: "#f9f9f9",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#2C3922",
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  buttonText: {
    fontFamily: "Poppins",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
    color: "#fff",
  },
  lottie: {
    width: 300, // Largeur de l'animation, ajustez selon vos besoins
    height: 300, // Hauteur de l'animation
    marginBottom: 50, // Espace entre l'animation et le champ de texte
  },
});

export default LoginScreen;
