import { router } from "expo-router";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useProducts } from "../../context/productcontext";

const screenWidth = Dimensions.get("window").width;

export default function Home() {
  const { products } = useProducts();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>StyleLoop</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
         <TouchableOpacity
  style={styles.card}
  activeOpacity={0.8}
  onPress={() => router.push(`/product/${item.id}`)}
>
            <Image source={{ uri: item.image }} style={styles.image} />

            <Text style={styles.name}>{item.name}</Text>

            <Text style={styles.price}>{item.price}</Text>

            <View style={styles.detailsBox}>
              <Text style={styles.detail}>Brand: {item.brand}</Text>
              <Text style={styles.detail}>Size: {item.size}</Text>
              <Text style={styles.detail}>Condition: {item.condition}</Text>
              <Text style={styles.detail}>Category: {item.category}</Text>
            </View>
         </TouchableOpacity>
        )}
      />
    </View>
  );
}

const cardWidth =
  screenWidth > 900 ? 500 : screenWidth > 600 ? 400 : "100%";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
    alignItems: "center",
  },
  heading: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    width: cardWidth,
    backgroundColor: "#111",
    borderRadius: 20,
    padding: 12,
    marginBottom: 25,
  },
  image: {
    width: "100%",
    height: 350,
    borderRadius: 15,
  },
  name: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 12,
  },
  price: {
    color: "#00FF88",
    fontSize: 20,
    marginTop: 5,
    fontWeight: "600",
  },
  detailsBox: {
    marginTop: 10,
    backgroundColor: "#1a1a1a",
    borderRadius: 10,
    padding: 10,
  },
  detail: {
    color: "#ccc",
    fontSize: 14,
    marginBottom: 4,
  },
});