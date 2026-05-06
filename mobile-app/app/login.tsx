import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(true);

  const handleLogin = async () => {
    if (email.trim() === "" || password.trim() === "") {
      setMessage("Please enter email and password");
      setIsError(true);
      return;
    }

    await AsyncStorage.setItem("isLoggedIn", "true");
    await AsyncStorage.setItem("userEmail", email);

    setMessage("Login successful!");
    setIsError(false);

    setTimeout(() => {
     router.replace("/home");
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>StyleLoop</Text>

      {message !== "" && (
        <Text style={isError ? styles.error : styles.success}>
          {message}
        </Text>
      )}

      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
  success: {
    color: "lime",
    textAlign: "center",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#111",
    color: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#00FF88",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
  },
});