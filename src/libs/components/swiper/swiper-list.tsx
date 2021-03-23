import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { SwiperListProps } from "./models";
import { SafeAreaView } from "react-native-safe-area-context";

export const SwiperControlList = ({ renderItem, data }: any) => {
  return (
    <SafeAreaView>
      <SwiperFlatList
        style={styles.container}
        showPagination
        autoplay
        autoplayLoop
        data={data}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { height: height },
});
