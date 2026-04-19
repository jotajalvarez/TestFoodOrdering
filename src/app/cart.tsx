import CartListItem from "@src/components/CartListItem";
import { useCart } from "@src/providers/CartProviders";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, FlatList, Platform, Text, View } from "react-native";

const CartScreen = () => {
  const { items, total } = useCart();

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ padding: 10, gap: 10 }}
      />

      <Text style={{ marginTop: 20, fontWeight: "bold", fontSize: 20 }}>
        Total: ${total}
      </Text>
      <Button title="Checkout" onPress={() => alert("Checkout")} />

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;
