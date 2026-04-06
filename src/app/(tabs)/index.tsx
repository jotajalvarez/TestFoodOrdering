import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";
import { View } from "react-native";

export default function MenuScreen() {
  return (
    <View style={{ padding: 10 }}>
      <ProductListItem product={products[0]} />
      <ProductListItem product={products[0]} />
    </View>
  );
}
