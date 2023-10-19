import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/features/ShelfSlice";
import { MainNavigationProp, MainRoutes } from "../navigation/Types";

const ShelfAddition: React.FC = ({ navigation }) => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    quantity: "",
    minQuantity: "",
    boughtDate: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    quantity: Yup.number()
      .required("Quantity is required")
      .positive("Quantity must be positive"),
    minQuantity: Yup.number()
      .required("Min Quantity is required")
      .positive("Min Quantity must be positive"),
    boughtDate: Yup.string().required("Bought Date is required"),
  });

  const handleAddItem = (values) => {
    // Handle form submission with the validated values
    const id = uuidv4();
    const parsedFormData = {
      ...values,
      id,
    };

    dispatch(addItem(parsedFormData));
    navigation.navigate(MainRoutes.MyShelf);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleAddItem}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <TextInput
            placeholder="Name"
            value={values.name}
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
          />
          {touched.name && errors.name && <Text>{errors.name}</Text>}

          <TextInput
            placeholder="Quantity"
            value={String(values.quantity)}
            onChangeText={handleChange("quantity")}
            onBlur={handleBlur("quantity")}
            keyboardType="numeric"
          />
          {touched.quantity && errors.quantity && (
            <Text style={styles.errorText}>{errors.quantity}</Text>
          )}

          <TextInput
            placeholder="Min Quantity"
            value={String(values.minQuantity)}
            onChangeText={handleChange("minQuantity")}
            onBlur={handleBlur("minQuantity")}
            keyboardType="numeric"
          />
          {touched.minQuantity && errors.minQuantity && (
            <Text style={styles.errorText}>{errors.minQuantity}</Text>
          )}

          <TextInput
            placeholder="Bought Date"
            value={values.boughtDate}
            onChangeText={handleChange("boughtDate")}
            onBlur={handleBlur("boughtDate")}
          />
          {touched.boughtDate && errors.boughtDate && (
            <Text style={styles.errorText}>{errors.boughtDate}</Text>
          )}

          <Button
            mode="contained"
            onPress={() => handleSubmit}
            style={styles.button}
          >
            Add
          </Button>
        </View>
      )}
    </Formik>
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
  errorText: {
    color: "red",
  },
});

export default ShelfAddition;
