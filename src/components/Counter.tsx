import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { Card } from "react-native-paper";

const items = [
  { name: "Item 1" },
  { name: "Item 2" },
  { name: "Item 3" },
  { name: "Item 4" }, // Add more items here
  { name: "Item 5" },
];

const Counter = ({ index, item }: any) => {
  const [counters, setCounters] = useState(items.map(() => 0));

  const handleIncrement = (index: any) => {
    const updatedCounters = [...counters];
    updatedCounters[index] += 1;
    setCounters(updatedCounters);
  };

  const handleDecrement = (index: any) => {
    const updatedCounters = [...counters];
    updatedCounters[index] -= 1;
    setCounters(updatedCounters);
  };

  return (
    <View>
      <Card key={index} style={{ margin: 10 }}>
        <Card.Content>
          <Text>{item.name}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Button title="-" onPress={() => handleDecrement(index)} />
            <Text>{counters[index]}</Text>
            <Button title="+" onPress={() => handleIncrement(index)} />
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Counter;
