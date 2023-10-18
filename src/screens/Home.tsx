import { Text, View } from "react-native";
import React from "react";
import Counter from "../components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { decrement, increment } from "../redux/features/counterSlice";
import { Button } from "react-native-paper";

const Home = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const shelfItems = useSelector((state: RootState) => state.shelf);

  const dispatch = useDispatch();
  // const items = [
  //   { name: "Item 1" },
  //   { name: "Item 2" },
  //   { name: "Item 3" },
  //   { name: "Item 4" }, // Add more items here
  //   { name: "Item 5" },
  // ];

  return (
    <View>
      {shelfItems.map((item, index) => (
        <Counter index={index} item={item} key={index} />
      ))}
      <Button
        aria-label="Increment value"
        onPress={() => dispatch(increment())}
      >
        Increment
      </Button>
      <Text>{count}</Text>
      <Button
        aria-label="Decrement value"
        onPress={() => dispatch(decrement())}
      >
        Decrement
      </Button>
    </View>
  );
};

export default Home;
