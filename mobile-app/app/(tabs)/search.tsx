import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useProducts } from "../../context/productcontext";

export default function Search() {
  const { products } = useProducts();

  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

const categories = ["All", "Hoodie", "Shoes", "Dress", "Watch"];

  const filteredProducts = products.filter((product: any) => {
  const searchText = query.toLowerCase();

  const matchesSearch =
    product.name.toLowerCase().includes(searchText) ||
    product.brand.toLowerCase().includes(searchText) ||
    product.category.toLowerCase().includes(searchText) ||
    product.size.toLowerCase().includes(searchText) ||
    product.condition.toLowerCase().includes(searchText);

  const matchesCategory =
    selectedCategory === "All" ||
    product.category === selectedCategory;

  return matchesSearch && matchesCategory;
});
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Search</Text>

      <TextInput
        placeholder="Search products..."
        placeholderTextColor="#777"
        style={styles.input}
        value={query}
        onChangeText={setQuery}
      />
<View style={styles.categoryRow}>
  {categories.map((category) => (
    <Text
      key={category}
      onPress={() => setSelectedCategory(category)}
      style={[
        styles.categoryChip,
        selectedCategory === category && styles.activeChip,
      ]}
    >
      {category}
    </Text>
  ))}
</View>
      <FlatList
        data={filteredProducts}
        ListEmptyComponent={
  <Text style={styles.emptyText}>No products found</Text>
}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/product/${item.id}`)}
          >
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categoryRow: {
  flexDirection: "row",
  marginBottom: 15,
  gap: 10,
  flexWrap: "wrap",
},
categoryChip: {
  color: "#fff",
  backgroundColor: "#111",
  paddingVertical: 8,
  paddingHorizontal: 14,
  borderRadius: 20,
},
activeChip: {
  backgroundColor: "#00FF88",
  color: "#000",
  fontWeight: "bold",
},
  emptyText: {
  color: "#777",
  textAlign: "center",
  marginTop: 30,
  fontSize: 16,
},
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 15,
  },
  heading: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    backgroundColor: "#111",
    color: "#fff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#111",
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: "row",
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
  },
  info: {
    padding: 10,
    justifyContent: "center",
  },
  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    color: "#00FF88",
    marginTop: 5,
    fontSize: 16,
  },
});