import { defaultPizzaImage } from "@/src/components/ProductListItem";
import products from "@assets/data/products";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "@src/constants/theme";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const product = products.find((p) => p.id.toString() === id);

  return (
    <View>

      <Stack.Screen 
        options={{ 
          title: "Menu",
          headerRight: () => (
          <Link href={{ pathname: "/(admin)/menu/create", params: { id } }} asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="pencil"
                  size={25}
                  color={Colors.light.tint}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ), 
      }} />

      <Image
        source={{ uri: product?.image || defaultPizzaImage }}
        style={styles.image}
      />

      <Text style={styles.title}>{product?.name}</Text>
      <Text style={styles.price}>${product?.price.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: "auto",
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    backgroundColor: "lightgray",
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
  },
});

export default ProductDetailsScreen;
