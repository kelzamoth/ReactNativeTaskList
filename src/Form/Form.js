import React, { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { useFonts, Inter_500Medium } from "@expo-google-fonts/inter";

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
  let [fontsLoaded] = useFonts({
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.main}>
        <TextInput
          maxLength={30}
          style={[styles.input, theme[themeMode].input]}
          value={text}
          onChangeText={onChange}
          onBlur={saveText}
          onEndEditing={saveText}
        ></TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    maxWidth: 377,
    marginBottom: 16,
    marginTop: 3,
  },
  input: {
    borderBottomWidth: 1,
    padding: 5,
    fontSize: 18,
    fontFamily: "Inter_500Medium",
  },
});

const theme = {
  light: StyleSheet.create({
    input: {
      borderColor: "#EBEBEB",
      color: "#575767",
    },
  }),
  dark: StyleSheet.create({
    input: {
      borderColor: "#29292F",
      color: "#DADADA",
    },
  }),
};

export default Form;
