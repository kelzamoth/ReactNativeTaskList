import React, { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";

function Form({ createNewTask, themeMode }) {
  const [text, setValue] = useState("");
  const onChange = (newText) => {
    setValue(newText);
  };

  const saveText = () => {
    if (text.length != 0) {
      createNewTask(text);
      setValue("");
    }
  };

  return (
    <View style={styles.main}>
      <TextInput
        maxLength={35}
        style={[styles.input, theme[themeMode].input]}
        value={text}
        onChangeText={onChange}
        onBlur={saveText}
        onEndEditing={saveText}
        placeholder={"Input text..."}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    maxWidth: 377,
  },
  input: {
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 18,
  },
});

const theme = {
  light: StyleSheet.create({
    input: {
      borderColor: "#000",
      color: "#000",
    },
  }),
  dark: StyleSheet.create({
    input: {
      borderColor: "#DADADA",
      color: "#DADADA",
    },
  }),
};

export default Form;
