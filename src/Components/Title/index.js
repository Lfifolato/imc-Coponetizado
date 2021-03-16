import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import { FontAwesome5 } from "@expo/vector-icons";

const Title = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.AreaTitle}>
        <FontAwesome5
          name="balance-scale-left"
          size={32}
          color="black"
          style={styles.iconTitle}
        />
        <Text style={styles.textTitle}>Calculadora IMC</Text>
        <FontAwesome5
          name="balance-scale-left"
          size={32}
          color="black"
          style={styles.iconTitle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eeee",
    height: "10%",
  },
  AreaTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconTitle: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  textTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default Title;
