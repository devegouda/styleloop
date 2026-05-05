import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>StyleLoop</Text>
      <Text style={styles.tagline}>Indians Fashion resale app</Text>
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
  logo: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
  },
  tagline: {
    color: "#00FF88",
    marginTop: 10,
  },
});