import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import Button from "@src/components/Button";
import { defaultPizzaImage } from "@src/components/ProductListItem";
import { useState } from "react";
import { Colors } from "@src/constants/theme";
import * as ImagePicker from 'expo-image-picker';
import { Alert } from "react-native"; 
import { Stack } from "expo-router";

const CreateProductScreen = () => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(""); 
  const [image, setImage] = useState<string | null>(null);
  const resetFields = () => {
    setName("");
    setPrice("");
    setImage(null);
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

    const pickImage = async () => {
    // No permissions request is necessary for launching the image library.
    // Manually request permissions for videos on iOS when `allowsEditing` is set to `false`
    // and `videoExportPreset` is `'Passthrough'` (the default), ideally before launching the picker
    // so the app users aren't surprised by a system dialog after picking a video.
    // See "Invoke permissions for videos" sub section for more details.
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('Permission required', 'Permission to access the media library is required.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Create Product" }} />

      <Image source={{ uri: image || defaultPizzaImage }} style={styles.image} />
      <Text onPress={pickImage} style={styles.textButton}>Select Image</Text>

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

