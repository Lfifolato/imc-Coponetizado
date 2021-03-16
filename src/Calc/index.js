import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Title from "../Components/Title";
import ResultArea from "../Components/ResultArea";

const Calc = () => {
  const [color, setcolor] = useState("#c5c5c5");
  const [numResult, setnumResult] = useState(0);
  const [obs, setObs] = useState("ND");

  return (
    <View style={styles.Container}>
      <Title />
      <ResultArea color={color} numResult={numResult} obs={obs} />

      <View style={styles.iput}>
        <MaterialCommunityIcons
          name="human-male-height"
          size={24}
          color="black"
        />
        <TextInput
          style={{ flex: 1, paddingHorizontal: 12 }}
          placeholder="Altura"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.iput}>
        <MaterialCommunityIcons name="scale-bathroom" size={24} color="black" />
        <TextInput
          style={{ flex: 1, paddingHorizontal: 12 }}
          placeholder="Pesso"
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
    justifyContent: "center",
    padding: "10%",
  },
  iput: {
    width: "100%",
    height: 65,
    backgroundColor: "#d1d1d1",
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  btn: {
    backgroundColor: "#c72e20",
    width: "80%",
    height: 45,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Calc;
