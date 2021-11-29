import React, { useState } from "react";
import { View, StyleSheet, FlatList, Switch, SafeAreaView } from "react-native";
import Form from "./Form/Form";
import Header from "./Header/Header";
import ListItem from "./List/ListItem";

function Main(props) {
  const createNewTask = (text) => {
    let key = Math.random().toString(36).substring(7);
    let isDone = true;
    props.addTask(text, key, isDone);
  };

  const [inputCondition, setInputCondition] = useState(false);
  const changeInputCond = () => setInputCondition(!inputCondition);
  const toggleSwitch = () =>
    props.theme == "light"
      ? props.changeTheme("dark")
      : props.changeTheme("light");

  return (
    <SafeAreaView style={styles.main}>
      <View style={[styles.container, theme[props.theme].container]}>
        <Switch
          trackColor={{ false: "#767577", true: "#BE1D1D" }}
          thumbColor={props.theme == "light" ? "#25241E" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={props.theme == "light"}
          style={styles.switch}
        />

        <Header changeInputCond={changeInputCond} themeMode={props.theme} />

        {inputCondition && (
          <Form createNewTask={createNewTask} themeMode={props.theme} />
        )}
        <View>
          <FlatList
            data={props.tasks}
            renderItem={({ item }) => (
              <ListItem
                el={item}
                isTaskChecked={props.isTaskChecked}
                themeMode={props.theme}
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 64,
    paddingTop: 64,
    width: "100%",
    height: "100%",
  },
  main: {
    margin: 0,
    padding: 0,
    width: "100%",
    height: "100%",
  },
  switch: {
    marginLeft: "auto",
    marginBottom: 10,
    width: 40,
    height: 20,
  },
});
const theme = {
  light: StyleSheet.create({
    container: {
      backgroundColor: "#FFFFFF",
    },
  }),
  dark: StyleSheet.create({
    container: {
      backgroundColor: "#1E1F25",
    },
  }),
};

export default Main;
