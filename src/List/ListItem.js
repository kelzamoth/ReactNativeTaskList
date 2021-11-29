import React from "react";
import { StyleSheet, Text } from "react-native";
import CheckBox from "expo-checkbox";
import { Col, Grid } from "react-native-easy-grid";

function ListItem({ el, isTaskChecked, themeMode }) {
  return (
    <Grid>
      <Col size={1} style={styles.col}>
        <CheckBox
          style={styles.checkBox}
          value={el.isDone}
          onValueChange={() => isTaskChecked(el.key, !el.isDone)}
        />
      </Col>
      <Col size={5} style={styles.col}>
        <Text style={[styles.text, theme[themeMode].text]} numberOfLines={1}>
          {el.text}
        </Text>
      </Col>
    </Grid>
  );
}

const styles = StyleSheet.create({
  col: {
    paddingVertical: 16,
    lineHeight: 24,
    justifyContent: "center",
  },
  checkBox: {
    width: 24,
    height: 24,
  },
  text: {
    alignItems: "flex-start",
    justifyContent: "center",
    fontSize: 18,
  },
});
const theme = {
  light: StyleSheet.create({
    text: {
      color: "#000000",
    },
  }),
  dark: StyleSheet.create({
    text: {
      color: "#DADADA",
    },
  }),
};

export default ListItem;
