import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ResultArea = ({ color, numResult, obs }) => {
  return (
    <View style={[styles.area, { backgroundColor: color }]}>
      <Text style={styles.textImc}>Seu Imc</Text>
      <Text style={styles.numResul}>{numResult}</Text>
      <Text style={styles.obsResult}>{obs}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  area: {
    height: 120,
    width: 340,
    justifyContent: "center",
    alignItems: "center",
    margin: "10%",
    backgroundColor: "#acacac",
    borderRadius: 8,
  },
  textImc: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000",
  },
  numResul: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  obsResult: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
});

export default ResultArea;
