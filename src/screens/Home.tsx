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

  return (
    <View>
      {shelfItems.items.map((item, index) => (
        <Counter index={index} item={item} key={index} />
      ))}
    </View>
  );
};

export default Home;
