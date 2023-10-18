import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid"; // Import uuid from the 'uuid' library
import { addItem } from "../redux/features/ShelfSlice";

const ShelfAddition: React.FC = () => {
  const [formData, setFormData] = useState({
    id: uuidv4(), // Generate a UUID for the 'id' field
    name: "",
    quantity: "",
    minQuantity: "",
    boughtDate: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleAddItem = () => {
  //   // Implement your logic to add the item using the values in formData
  //   // You can access formData.id, formData.name, formData.quantity, formData.minQuantity, and formData.boughtDate
  // };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        value={formData.name}
        onChangeText={(text) => handleChange("name", text)}
      />
      <TextInput
        placeholder="Quantity"
        value={formData.quantity}
        onChangeText={(text) => handleChange("quantity", text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Min Quantity"
        value={formData.minQuantity}
        onChangeText={(text) => handleChange("minQuantity", text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Bought Date"
        value={formData.boughtDate}
        onChangeText={(text) => handleChange("boughtDate", text)}
      />
      <Button mode="contained" onPress={addItem} style={styles.button}>
        Add
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default ShelfAddition;
