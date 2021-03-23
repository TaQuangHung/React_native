import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { QuestionProps } from "../models";
import { SafeAreaView } from "react-native-safe-area-context";

export const Question = ({ item }: QuestionProps) => {
  return (
    <SafeAreaView>
      <View style={styles.item}>
        <Image source={item.img} style={styles.itemImg} />
        <View style={styles.itemText}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.text}>{item.text}</Text>
          <Text style={styles.note}>{item.note}</Text>
        </View>
        <TouchableOpacity
          onPress={() => alert("View")}
          style={[styles.itemBtn, item.textBtn !== "View" && styles.itemBtnSet]}
        >
          <Text style={{ color: "white" }}>{item.textBtn}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  questions: {
    flex: 1,
    paddingHorizontal: 17,
    paddingTop: 15,
  },
  txtQuestion: {
    color: "#205072",
    marginBottom: 20,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E0ECDE",
    marginBottom: 15,
  },
  itemImg: {
    flex: 1,
    marginRight: 10,
  },
  itemText: {
    flex: 7,
  },
  itemBtn: {
    backgroundColor: "#F75010",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    width: 50,
    paddingVertical: 5,
  },
  itemBtnSet: {
    backgroundColor: "#47CACC",
  },
  name: {
    color: "#205072",
    opacity: 0.34,
    fontSize: 10,
  },
  text: {
    color: "#205072",
    fontSize: 13,
  },
  note: {
    color: "#205072",
    fontSize: 11,
    opacity: 0.34,
  },
});
