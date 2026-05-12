import { router, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useProducts } from "../../context/productcontext";

export default function ProductDetails() {
  const { id } = useLocalSearchParams();

  const { products } = useProducts();

  const product = products.find((p: any) => p.id === id);

  if (!product) {
    return (
      <View style={styles.center}>
        <Text style={styles.notFound}>Product not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
  <Text style={styles.backText}>← Back</Text>
</TouchableOpacity>
      <Image source={{ uri: product.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>

        <Text style={styles.price}>{product.price}</Text>

        <View style={styles.infoBox}>
          <Text style={styles.info}>Brand: {product.brand}</Text>
          <Text style={styles.info}>Size: {product.size}</Text>
          <Text style={styles.info}>Condition: {product.condition}</Text>
          <Text style={styles.info}>Category: {product.category}</Text>
        </View>

        <Text style={styles.descriptionTitle}>Description</Text>

        <Text style={styles.description}>
          Premium fashion item uploaded on StyleLoop marketplace.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    height: 400,
  },
  content: {
    padding: 20,
  },
  name: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  price: {
    color: "#00FF88",
    fontSize: 26,
    marginTop: 10,
    fontWeight: "bold",
  },
  infoBox: {
    backgroundColor: "#111",
    padding: 15,
    borderRadius: 15,
    marginTop: 20,
  },
  info: {
    color: "#ccc",
    fontSize: 16,
    marginBottom: 8,
  },
  descriptionTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 25,
  },
  description: {
    color: "#aaa",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 10,
  },
  center: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  notFound: {
    color: "red",
    fontSize: 22,
  },
  backButton: {
  padding: 15,
  backgroundColor: "#111",
},
backText: {
  color: "#00FF88",
  fontSize: 18,
  fontWeight: "bold",
},
});