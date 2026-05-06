import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  const router = useRouter();

  const handleLogout = async () => {
    await AsyncStorage.removeItem("isLoggedIn");
    await AsyncStorage.removeItem("userEmail");

    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 30,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 10,
    width: 200,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});