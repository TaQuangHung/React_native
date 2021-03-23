import React from "react";
import {  Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell
} from "react-native-confirmation-code-field";

const styles = StyleSheet.create({
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: {
    marginTop: 27,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cell: {
    width: 60,
    height: 60,
    fontSize: 25,
    borderWidth: 2,
    borderColor: "#E0ECDE",
    textAlign: "center",
    borderRadius: 15,
    lineHeight: 60,
    margin: 10,
    marginTop: 0,
    marginBottom: 0,
  },
  focusCell: {
    borderColor: "transparent",
    color: "#E0ECDE",
  },
  bgCell: {
    backgroundColor: "#56C596",
    color: "#FFF",
  },
});

interface ConfirmProps {
  cellCount: number;
  value: string;
  setValue: any;
}

export const ConfirmCodeControl = ({
  cellCount,
  value,
  setValue,
}: ConfirmProps) => {
  const ref = useBlurOnFulfill({ value, cellCount });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderCell = ({ index, symbol, isFocused }: any) => {
    return (
      <Text
        key={index}
        style={[
          styles.cell,
          isFocused && styles.focusCell,
          symbol && styles.bgCell,
        ]}
        onLayout={getCellOnLayoutHandler(index)}
      >
        {symbol || (isFocused ? <Cursor /> : null)}
      </Text>
    );
  };

  return (
    <SafeAreaView>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={cellCount}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
      />
    </SafeAreaView>
  );
};
