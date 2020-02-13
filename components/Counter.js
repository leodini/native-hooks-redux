import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, TouchableOpacity } from "react-native";
import { actions } from "../actions/counter";
import { selector } from "../selectors/counter";
const Counter = () => {
  const counter = useSelector(selector.getCounter);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(actions.increment());
  const handleDecrement = () => dispatch(actions.decrement());
  return (
    <View>
      <Text>Contador: {counter}</Text>
      <TouchableOpacity onPress={() => handleIncrement}>
        <Text>increment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDecrement}>
        <Text>decrement</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
