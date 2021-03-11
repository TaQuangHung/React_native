import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Main() {
  return (
    <>
      {/* <View style={styles.logo}>
        <Image
          source={{ uri: "https://i.imgur.com/TkIrScD.png" }}
          style={styles.image}
        />
      </View> */}
      <View style={styles.container}>
        <Text style={styles.text}>
          Main 12
      </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: 305,
    height: 159
  },
  text: {
    fontSize: 18
  }
});