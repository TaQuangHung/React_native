import React from "react";
import { Image, StyleSheet, View } from "react-native";
import imgPlus from "../../../assets/icons/plus.png";

export const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={imgPlus} style={styles.imgPlus} />
      <Image source={imgPlus} style={styles.imgPlus} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
    marginTop: 24,
  },
  imgPlus: {
    width: 20,
    height: 20,
    marginRight: 1,
  },
});
