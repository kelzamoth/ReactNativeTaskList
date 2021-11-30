import React from "react";
import { StyleSheet, Text } from "react-native";
import AddButton from "./AddButton/AddButton";
import { Col, Grid } from "react-native-easy-grid";
import { useFonts, Inter_800ExtraBold } from "@expo-google-fonts/inter";

function Header({ changeInputCond, themeMode }) {
  let [fontsLoaded] = useFonts({
    Inter_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <Grid style={styles.main}>
        <Col size={3}>
          <Text
            numberOfLines={1}
            style={[
              styles.textTask,
              theme[themeMode].text,
              { fontFamily: "Inter_800ExtraBold" },
            ]}
          >
            Tasks
          </Text>
        </Col>
        <Col
          size={1}
          style={{
            paddingTop: 6,
          }}
        >
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
}

const styles = StyleSheet.create({
  main: {
    minHeight: 68,
    width: "100%",
  },
  textTask: {
    minHeight: 56,
    fontSize: 56,
    color: "black",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 56,
    height: 56,
    borderRadius: 6,
    borderWidth: 1,
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
      color: "#DADADA",
    },
    button: {
      backgroundColor: "#24242D",
      borderColor: "#29292F",
    },
  }),
};

export default Header;
