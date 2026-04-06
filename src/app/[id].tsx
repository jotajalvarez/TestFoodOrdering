import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "red" }}>
        Product Details for id: {id}
      </Text>
      <Text style={{ color: "red" }}>
        More details about the product will go here...
      </Text>
      <Text style={{ color: "red" }}>
        Maybe an "Add to Cart" button as well?
      </Text>
    </View>
  );
};

export default ProductDetailsScreen;
