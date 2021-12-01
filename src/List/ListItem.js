import React from "react";
import { StyleSheet, Text } from "react-native";
import { CheckBox } from "react-native-elements";
import { Col, Grid } from "react-native-easy-grid";
import { useFonts, Inter_500Medium } from "@expo-google-fonts/inter";

function ListItem({ el, isTaskChecked, themeMode }) {
  let [fontsLoaded] = useFonts({
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <Grid>
        <Col style={styles.col} size={6}>
          <CheckBox
            containerStyle={styles.checkBox}
            checked={el.isDone}
            checkedColor={themeMode == "light" ? "red" : "#DADADA"}
            uncheckedColor={themeMode == "light" ? "#DADADA" : "#000"}
            size={24}
            onPress={() => isTaskChecked(el.key, !el.isDone)}
          />
        </Col>
        <Col style={styles.col} size={94}>
          <Text style={[styles.text, theme[themeMode].text]} numberOfLines={1}>
            {el.text}
          </Text>
        </Col>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  col: {
    marginVertical: 16,
    height: 26,
  },
  checkBox: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 2,
    marginBottom: 0,
    padding: 0,
    alignItems: "flex-start",
  },
  text: {
    textAlign: "left",
    marginLeft: 15,
    fontSize: 18,
    fontFamily: "Inter_500Medium",
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
