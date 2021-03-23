import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Header } from "../../layout";
import imgNotification from "../../../assets/images/screen.png";
import imgPlus from "../../../assets/icons/plus.png";
import imgCheck from "../../../assets/icons/check.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export const Notification = ({ navigation }: any) => {
  const renderItem = ({ item }: any) => (
    <Item title={item.title} imgCheck={imgCheck} />
  );
  return (
    <SafeAreaView>
      <Header />
      <View style={styles.root}>
        <Text style={styles.textTitle}>Turn on Notification</Text>
      </View>
      <View style={styles.screen}>
        <Image source={imgNotification} style={styles.imgPhone} />

        <View style={styles.popupTop}>
          <View style={styles.popupTopLeft}>
            <Image source={imgPlus} style={styles.imgPlus} />
            <Image source={imgPlus} style={styles.imgPlus} />
          </View>
          <View style={styles.popupTopRight}>
            <Text
              style={{
                color: "#329D9C",
                fontSize: 13,
                marginBottom: 4,
                fontWeight: "bold",
              }}
            >
              Healthie™
            </Text>
            <Text style={{ color: "#205072", fontSize: 10, fontWeight: "500" }}>
              Your weekly report is here!
            </Text>
            <View style={styles.imgDot}></View>
          </View>
        </View>

        <View style={styles.popupBottom}>
          <View style={styles.popupBottomContent}>
            <FlatList
              data={DataList}
              renderItem={renderItem}
              keyExtractor={(item: any) => item.id}
            />
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{
            margin: 30,
            marginVertical: 10,
            backgroundColor: "#7BE495",
            height: 50,
            borderRadius: 48,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#FFF", textTransform: "uppercase" }}>
            Turn on
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{ color: "#000", textAlign: "center", fontWeight: "bold" }}
          >
            Skip this
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const Item = ({ title, imgCheck }: any) => (
  <View style={styles.item}>
    <Image source={imgCheck} />
    <Text style={styles.titleItem}>{title}</Text>
  </View>
);

const DataList = [
  {
    id: "1",
    title: "Weekly healthy suggestions",
  },
  {
    id: "2",
    title: "Daily health reminder and reprot",
  },
  {
    id: "3",
    title: "Tailor made services just for you",
  },
];

const styles = StyleSheet.create({
  root: {},
  screen: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    marginBottom: 30,
    height: 500,
    overflow: "hidden",
  },
  imgPhone: {},
  textTitle: {
    color: "#205072",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 19,
  },
  popupTop: {
    position: "absolute",
    top: 70,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  imgDot: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#7BE495",
    width: 10,
    height: 10,
    borderRadius: 10,
  },
  imgPlus: {
    width: 15,
    height: 16,
  },
  popupTopLeft: {
    backgroundColor: "#FFF",
    padding: 10,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    zIndex: 10,
    top: 10,
  },
  popupTopRight: {
    backgroundColor: "#FFF",
    padding: 20,
    paddingLeft: 40,
    borderRadius: 10,
    width: "75%",
    zIndex: 9,
    marginLeft: -10,
  },
  popupBottom: {
    backgroundColor: "#FFF",
    position: "absolute",
    bottom: 0,
    width: "100%",
    textAlign: "center",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  popupBottomContent: {
    width: "60%",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0ECDE",
  },
  titleItem: {
    marginHorizontal: 16,
  },
});
