import { createContext, useContext, useState } from "react";

const ProductContext = createContext<any>(undefined);

const initialProducts = [
  {
    id: "1",
    name: "Nike Hoodie",
    price: "₹1999",
    brand: "Nike",
    size: "M",
    condition: "Good",
    category: "Hoodie",
    image: "https://picsum.photos/500/500?1",
  },
  {
    id: "2",
    name: "Adidas Shoes",
    price: "₹2999",
    brand: "Adidas",
    size: "UK 9",
    condition: "Like New",
    category: "Shoes",
    image: "https://picsum.photos/500/500?2",
  },
];

export function ProductProvider({ children }: any) {
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (product: any) => {
    setProducts((prev: any) => [product, ...prev]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProducts must be used inside ProductProvider");
  }

  return context;
}