import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import imgDot from "../../../assets/icons/dot-green.png";
import imgAvt from "../../../assets/images/avatar.jpg";
import imgSummary from "../../../assets/images/summary.png";
import imgBrain from "../../../assets/icons/brain.png";
import imgPath from "../../../assets/icons/path.png";
import { Question } from "./question/question";
import { Specialist } from "./specialist/specialist";
import { QuestionProps } from "./models";

const DataListQuestion = [
  {
    id: "1",
    text: "Brain Checkout",
    name: "Doctors",
    note: "Have an appointment today",
    textBtn: "View",
    img: imgBrain,
  },
  {
    id: "2",
    text: "Purchase Prescription",
    name: "Pharmacy",
    note: "Don't forget to bring the list with you",
    textBtn: "Set",
    img: imgPath,
  },
];

export const Summary = () => {
  const renderItem = ({ item }: QuestionProps) => <Question item={item} />;

  return (
    <SafeAreaView style={styles.root}>
      <ImageBackground source={imgSummary} style={styles.image}>
        <View style={styles.wrAvt}>
          <Image source={imgAvt} style={styles.avatar} />
          <Image source={imgDot} style={styles.active} />
        </View>
        <View>
          <Text style={styles.title}>Good Evening {"\n"}Alexis</Text>
          <Text style={styles.description}>
            Your target for today is to keep positive mindset {"\n"}and smile to
            everyone you meet.
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => alert("More detail")}
            style={styles.btnMore}
          >
            <Text style={styles.textBtn}>More detail</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => alert("View Profile")}
            style={styles.btnProfile}
          >
            <Text style={styles.textBtn}>View your profile</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.questions}>
        <Text style={styles.txtQuestion}>What are you doing today?</Text>
        <FlatList
          data={DataListQuestion}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id}
        />
      </View>
      <View style={styles.specialist}>
        <Specialist />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    paddingHorizontal: 17,
    paddingBottom: 25,
    flex: 1,
  },
  wrAvt: {
    marginTop: 13,
    position: "relative",
    display: "flex",
    alignItems: "flex-end",
  },
  avatar: {
    width: 60,
    height: 60,
    borderWidth: 5,
    borderColor: "white",
    borderRadius: 30,
  },
  active: {
    position: "absolute",
    right: 10,
    bottom: 0,
    width: 13,
    height: 13,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    marginVertical: 10,
  },
  description: {
    fontSize: 13,
    marginBottom: 20,
    color: "#68B2A0",
  },
  btnMore: {
    backgroundColor: "#205072",
    padding: 12,
    borderRadius: 18,
    marginRight: 15,
  },
  btnProfile: {
    backgroundColor: "#329D9C",
    padding: 12,
    borderRadius: 18,
  },
  textBtn: {
    color: "white",
  },
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
    paddingBottom: 15,
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
    flex: 1,
    backgroundColor: "#F75010",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    padding: 5,
  },
  specialist: {
    flex: 1,
  },
});
