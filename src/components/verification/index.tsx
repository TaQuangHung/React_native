import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Header } from "../../layout";
import { ConfirmCodeControl } from "../../libs/components/confirm-code";
import { SafeAreaView } from "react-native-safe-area-context";

export const Verification = ({ navigation }: any) => {
  const [value, setValue] = useState("");
  const CELL_VALUE = 4;
  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Header />
        <View style={styles.wrTitle}>
          <Text style={styles.titleVerification}>
            Verify your number with{"\n"} codes sent to you
          </Text>
        </View>

        <ConfirmCodeControl
          cellCount={CELL_VALUE}
          value={value}
          setValue={setValue}
        />

        <Text style={styles.description}>
          I didn’t receive the code,{" "}
          <Text style={styles.resend} onPress={() => setValue("")}>
            Resend
          </Text>
        </Text>

        <TouchableOpacity
          style={[
            styles.btnStarted,
            CELL_VALUE !== value.length && styles.btnDisabled,
          ]}
          disabled={CELL_VALUE !== value.length}
          onPress={() => navigation.navigate("Summary")}
        >
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 19,
    paddingTop: 0,
    display: "flex",
    flexDirection: "column",
  },
  wrTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  titleVerification: {
    color: "#205072",
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
  },
  description: {
    color: "#68B2A0",
    fontSize: 13,
    marginTop: 30,
    textAlign: "center",
  },
  resend: {
    color: "#205072",
    fontWeight: "bold",
  },
  btnStarted: {
    backgroundColor: "#7BE495",
    height: 50,
    borderRadius: 48,
    marginTop: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnDisabled: {
    backgroundColor: "#E0ECDE",
  },
  btnText: {
    fontSize: 20,
    color: "#fff",
    textTransform: "uppercase",
  },
});
