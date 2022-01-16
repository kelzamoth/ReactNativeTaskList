import React, { useState } from "react";
import { View, StyleSheet, FlatList, Switch, Text } from "react-native";
import Form from "./Form/Form";
import Header from "./Header/Header";
import ListItem from "./List/ListItem";
import ModalDropdown from "react-native-modal-dropdown";

function Main(props) {
  const createNewTask = (text) => {
    let key = Math.random().toString(36).substring(7);
    let isDone = false;
    props.addTask(text, key, isDone);
  };

  const [inputCondition, setInputCondition] = useState(false);
  const changeInputCond = () => setInputCondition(!inputCondition);
  const toggleSwitch = () =>
    props.theme == "light"
      ? props.changeTheme("dark")
      : props.changeTheme("light");

  let taskCount = props.tasks.length;
  let checkedTask = props.tasks.filter((item) => item.isDone === true).length;

  return (
    <View style={styles.main}>
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
        <Text>Общее количество задач: {taskCount}</Text>
        <Text>Количество выполенных задач: {checkedTask}</Text>
        {inputCondition && (
          <Form createNewTask={createNewTask} themeMode={props.theme} />
        )}
        <FlatList
          data={props.tasks}
          renderItem={({ item }) => (
            <ListItem
              el={item}
              isTaskChecked={props.isTaskChecked}
              themeMode={props.theme}
              deleteTask={props.deleteTask}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 64,
    paddingTop: 64,
    width: "100%",
    height: "100%",
    fontFamily: "Inter",
  },
  main: {
    margin: 0,
    padding: 0,
    width: "100%",
    height: "auto",
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
