import React from "react";
import { Image, StyleSheet, Pressable } from "react-native";

export default function AddButton({ onPressFunc, button, image, themeMode }) {
  return (
    <Pressable style={button} onPress={onPressFunc}>
      {themeMode == "light" ? (
        <Image
          style={image}
          source={require("../../../assets/plus-light.png")}
        />
      ) : (
        <Image
          style={image}
          source={require("../../../assets/plus-dark.png")}
        />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({});
