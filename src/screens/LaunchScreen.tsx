import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../ui/colors";

const LaunchScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/musiumLogo.png")} />
      <Text style={styles.text}>Musium</Text>
    </View>
  );
};

export default LaunchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["background-dark"],
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors["blue-color-3"],
    fontSize: 32,
    fontWeight: "900",
  },
});
