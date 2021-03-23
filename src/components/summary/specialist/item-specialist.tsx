import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import imgAvt from "../../../../assets/images/torres.jpg";
import iconRate from "../../../../assets/icons/rate.png";

export const ItemSpecialist = ({ item }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.slide}>
        <Image source={imgAvt} style={styles.img} />
        <View style={{ flex: 1, marginLeft: 15 }}>
          <Text
            style={{
              fontSize: 10,
              color: "#205072",
            }}
          >
            Physician
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 13,
            }}
          >
            Svyatoslav Taushev
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Image source={iconRate} />
            <Image source={iconRate} />
            <Image source={iconRate} />
          </View>
        </View>
        <TouchableOpacity onPress={() => alert("View")} style={styles.btnBook}>
          <Text style={styles.txtBook}>book</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: width / 1.1,
    alignItems: "center",
  },
  slide: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: width / 1.5,
    backgroundColor: "#FFF",
    paddingVertical: 15,
    borderRadius: 15,
  },
  img: {
    width: 70,
    height: 70,
    marginLeft: -30,
    borderRadius: 15,
  },
  btnBook: {
    marginRight: 15,
    borderColor: "#CDB3D4",
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  txtBook: {
    color: "#CDB3D4",
  },
});
