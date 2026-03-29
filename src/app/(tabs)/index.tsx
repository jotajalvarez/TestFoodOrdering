import products from "@/assets/data/products";
import { Colors } from "@/src/constants/theme";
import { Image, StyleSheet, Text, View } from "react-native";

const product = products[1];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  price: {
    fontWeight: "bold",
    color: Colors.light.tint,
  },
});
