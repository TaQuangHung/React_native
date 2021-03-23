import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Header } from "./../../layout/header/index";
import { SwiperControl } from "../../libs/components";
import { SafeAreaView } from "react-native-safe-area-context";

export const Welcome = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <View style={styles.welcome}>
        <View style={styles.wrTitle}>
          <Text style={styles.title}>
            This is Health UX Kit,{"\n"} Welcome!
          </Text>
          <Text style={styles.description}>
            A health vertical UI kit made with{"\n"} love for Adobe XD
          </Text>
          <View style={{ height: windowHeight / 1.7  }}>
            <SwiperControl autoplay={true} loop={true} />
          </View>
        </View>

        <View style={styles.wrBtn}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Notification")}
            style={styles.btnStarted}
          >
            <Text style={styles.btnText}>Get started</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.wrDoctor}>
          <Text style={styles.textBottom}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.btnTextSignin}> Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  welcome: {
    marginBottom: 30,
    padding: 21,
  },
  wrTitle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#205072",
    fontSize: 21,
    marginBottom: 9,
    textAlign: "center",
    fontWeight: "bold",
  },
  description: {
    color: "#68B2A0",
    fontSize: 13,
    marginBottom: 29,
    textAlign: "center",
  },
  wrDoctor: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10
  },
  imgDoctor: {
    margin: "auto",
  },
  wrBtn: {},
  btnStarted: {
    backgroundColor: "#7BE495",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    borderRadius: 48,
  },
  btnText: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
  },
  textBottom: {
    color: "#68B2A0",
    fontSize: 13,
  },
  btnTextSignin: {
    color: "#205072",
    fontSize: 13,
    fontWeight: "bold",
  },
});
