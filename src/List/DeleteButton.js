import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export default function DeleteButton({ button, onPressFunc, keyItem }) {
  return (
    <Pressable style={button} onPress={() => onPressFunc(keyItem)}>
      <Text>K</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
