import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useProducts } from "../../context/productcontext";

export default function Sell() {
  const { addProduct } = useProducts();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [condition, setCondition] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const [message, setMessage] = useState("");

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      setMessage("Permission needed to access gallery");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 0.7,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setMessage("Image selected");
    }
  };

  const handleAddProduct = () => {
    if (
      name.trim() === "" ||
      price.trim() === "" ||
      brand.trim() === "" ||
      size.trim() === "" ||
      condition.trim() === "" ||
      category.trim() === "" ||
      image.trim() === ""
    ) {
      setMessage("Please fill all fields and select image");
      return;
    }

    const newProduct = {
      id: Date.now().toString(),
      name,
      price: `₹${price}`,
      brand,
      size,
      condition,
      category,
      image,
    };

    addProduct(newProduct);

    setMessage("Product added successfully!");

    setName("");
    setPrice("");
    setBrand("");
    setSize("");
    setCondition("");
    setCategory("");
    setImage("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sell Product</Text>

      {message !== "" && <Text style={styles.message}>{message}</Text>}

      <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
        <Text style={styles.imageButtonText}>Select Image</Text>
      </TouchableOpacity>

      {image !== "" && <Image source={{ uri: image }} style={styles.preview} />}

      <TextInput
        placeholder="Product name"
        placeholderTextColor="#777"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Price"
        placeholderTextColor="#777"
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Brand"
        placeholderTextColor="#777"
        style={styles.input}
        value={brand}
        onChangeText={setBrand}
      />

      <TextInput
        placeholder="Size"
        placeholderTextColor="#777"
        style={styles.input}
        value={size}
        onChangeText={setSize}
      />

      <TextInput
        placeholder="Condition"
        placeholderTextColor="#777"
        style={styles.input}
        value={condition}
        onChangeText={setCondition}
      />

      <TextInput
        placeholder="Category"
        placeholderTextColor="#777"
        style={styles.input}
        value={category}
        onChangeText={setCategory}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
        <Text style={styles.buttonText}>Add Product</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
    justifyContent: "center",
  },
  heading: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  message: {
    color: "#00FF88",
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
  },
  imageButton: {
    backgroundColor: "#222",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  imageButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  preview: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#111",
    color: "#fff",
    padding: 13,
    borderRadius: 10,
    marginBottom: 10,
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
    fontSize: 16,
  },
});