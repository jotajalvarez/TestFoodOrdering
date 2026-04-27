import { View, Text, StyleSheet, TextInput } from "react-native";
import Button from "@src/components/Button";
import defaultPizzaImage from "@src/assets/images/default-pizza.jpg";
import { useState } from "react";

const CreateProductScreen = () => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(""); 

  const resetFields = () => {
    setName("");
    setPrice("");
  };  

  const validateInput = () => {
    setError("");
    if (!name) {
        setError("Name is required");
        return false;   
    }
    if (!price) {
        setError("Price is required");
        return false;
    }
    if (isNaN(parseFloat(price))) {
        setError("Please enter a valid price");
        return false;
    }
    return true;
  };
  
  const onCreate = () => {
    if (!validateInput()) return;

    console.log("Creating product: ", name);

    // Save in ther database here

    resetFields();
  };  

  return (
    <View style={styles.container}>
      <Image source={defaultPizzaImage} style={styles.image} />  
      <Text style={styles.textButton}>Select Image</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name" 
        style={styles.input} />

      <Text style={styles.label}>Price</Text>
      <TextInput 
        value={price}
        onChangeText={setPrice}
        placeholder="9.99" 
        style={styles.input} 
        keyboardType="numeric"/>

      <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>  
      <Button text="Create" onPress={onCreate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  image: {
    width: "50%",
    aspectRatio: 1,
    alignSelf: "center",
    marginBottom: 20,
  },
  input: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  textButton: {
    alignSelf: "center",
    color: Colors.light.tint,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default CreateProductScreen;

