import { Stack } from "expo-router";
import { ProductProvider } from "../context/productcontext";

export default function RootLayout() {
  return (
    <ProductProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ProductProvider>
  );
}