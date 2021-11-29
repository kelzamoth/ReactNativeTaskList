import React from "react";
import { StyleSheet, Text } from "react-native";
import AddButton from "./AddButton/AddButton";
import { Col, Row, Grid } from "react-native-easy-grid";

function Header({ changeInputCond, themeMode }) {
  return (
    <Grid style={styles.main}>
      <Col size={3} style={styles.col}>
        <Text numberOfLines={1} style={[styles.text, theme[themeMode].text]}>
          Tasks
        </Text>
      </Col>
      <Col size={1}>
        <AddButton
          button={[styles.button, theme[themeMode].button]}
          image={styles.image}
          onPressFunc={changeInputCond}
          themeMode={themeMode}
        />
      </Col>
    </Grid>
  );
}

const styles = StyleSheet.create({
  main: {
    maxHeight: 68,
    minHeight: 68,
  },
  col: {
    justifyContent: "center",
  },
  text: {
    lineHeight: 56,
    fontSize: 56,
    fontWeight: "bold",
    color: "black",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 56,
    height: 56,
    borderRadius: 6,
    borderWidth: 1,
    elevation: 3,
    marginLeft: "auto",
  },
  image: {
    width: 24,
    height: 24,
  },
});

const theme = {
  light: StyleSheet.create({
    text: {
      color: "#000000",
    },
    button: {
      backgroundColor: "#F2F3FF",
      borderColor: "#EBEBEB",
    },
  }),
  dark: StyleSheet.create({
    text: {
      color: "#FFFFFF",
    },
    button: {
      backgroundColor: "#3C3C4B",
      borderColor: "#46464B",
    },
  }),
};

export default Header;
