import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";
import imgDoctor from "../../../../assets/images/doctor3x.png";
import { SwiperProps } from "./models";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgDoctor: {
    marginBottom: 70,
  },
});

export const SwiperControl = (props: SwiperProps) => {
  return (
    <SafeAreaView>
      <Swiper
        style={styles.wrapper}
        {...props}
        dotColor="#E0ECDE"
        activeDotColor="#56C596"
      >
        <View style={styles.slide1}>
          <Image source={imgDoctor} style={styles.imgDoctor} />
        </View>

        <View style={styles.slide2}>
          <Image source={imgDoctor} style={styles.imgDoctor} />
        </View>

        <View style={styles.slide3}>
          <Image source={imgDoctor} style={styles.imgDoctor} />
        </View>

        <View style={styles.slide3}>
          <Image source={imgDoctor} style={styles.imgDoctor} />
        </View>
      </Swiper>
    </SafeAreaView>
  );
};
