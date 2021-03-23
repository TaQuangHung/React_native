import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SwiperControl, SwiperControlList } from "../../../libs/components";
import { SafeAreaView } from "react-native-safe-area-context";
import imgDoctor from "../../../../assets/images/doctor.png";
import { ItemSpecialist } from "./item-specialist";
import imgTorres from "../../../../assets/images/torres.jpg";
import imgAvt from "../../../../assets/images/avatar.jpg";

const data = [
  {
    id: "1",
    img: imgTorres,
    name: "Fernando Torres",
    subject: "Physician",
    rate: 5,
  },
  {
    id: "2",
    img: imgAvt,
    name: "Svyatoslav Taushev",
    subject: "Maths",
    rate: 3,
  },
  {
    id: "3",
    img: imgTorres,
    name: "Fernando Torres",
    subject: "Physician",
    rate: 2,
  },
];

export const Specialist = () => {
  const renderItem = ({ item }: any) => {
    return <ItemSpecialist item={item} />;
  };
  return (
    <View style={styles.root}>
      <Text style={styles.textSpecial}>Visit a Specialists</Text>
      <SwiperControlList renderItem={renderItem} data={data} />
    </View>
  );
};
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: height,
  },
  textSpecial: {
    fontSize: 13,
    color: "#205072",
    paddingHorizontal: 17,
  },
});
