import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Summary } from "../summary";
import { Image, StyleSheet, Text, View } from "react-native";
import imgHome from "../../../assets/icons/home.png";
import imgSearch from "../../../assets/icons/search.png";
import imgHeart from "../../../assets/icons/heart.png";
import imgProfile from "../../../assets/icons/user.png";
import { Search } from "../search";
import { Heart } from "../heart";
import { UserProfile } from "../user-profile";
import { SafeAreaView } from "react-native-safe-area-context";
import { Plus } from "../plus";

const Tab = createBottomTabNavigator();

export const NavigationBottomTab = () => {
  return (
    <Tab.Navigator initialRouteName="Summary">
      <Tab.Screen
        name="Summary"
        component={Summary}
        options={{
          title: "Home",
          tabBarIcon: () => {
            return <Image source={imgHome} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: "Search",
          tabBarIcon: () => {
            return <Image source={imgSearch} />;
          },
        }}
      />
      <Tab.Screen
        name="Plus"
        component={Plus}
        options={{
          title: "",
          tabBarIcon: () => {
            return <ButtonPlus />;
          },
        }}
      />
      <Tab.Screen
        name="Heart"
        component={Heart}
        options={{
          title: "Heart",
          tabBarIcon: () => {
            return <Image source={imgHeart} />;
          },
        }}
      />
      <Tab.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          title: "UserProfile",
          tabBarIcon: () => {
            return <Image source={imgProfile} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export const ButtonPlus = () => {
  return (
    <View style={styles.btn}>
      <Text style={styles.plus}>+</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 70,
    height: 70,
    borderRadius: 70,
    backgroundColor: "#7BE495",
    position: "absolute",
    bottom: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderColor: "#FFF",
  },
  plus: {
    fontSize: 50,
    color: "#FFF",
  },
});
