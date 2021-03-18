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
  const [obs, setObs] = useState("");
  const [pesso, setPesso] = useState();
  const [altura, setAltura] = useState();

  function calcularImc() {
    var media = pesso / (altura * altura);
    if (media <= 18.5) {
      setnumResult(media);
      setObs("Abaixo do Peso ideal");
      setcolor("#1E90FF");
    } else if (media > 18.5 && media <= 24.9) {
      setnumResult(media);
      setObs(" PARABÉNS - Pesso Ideal");
      setcolor("#00FF00");
    } else if (media > 25 && media <= 29.9) {
      setnumResult(media);
      setObs("Cuidado - Acima do Pesso ");
      setcolor("#FFFF00");
    } else if (media > 30 && media <= 34.9) {
      setnumResult(media);
      setObs("Obesidade Grau I");
      setcolor("#FF7F50");
    } else if (media > 35 && media <= 39.9) {
      setnumResult(media);
      setObs("Obesidade Grau II");
      setcolor("#FF6347");
    } else if (media > 40) {
      setnumResult(media);
      setObs("Obesidade Grau III");
      setcolor("#FF0000");
    }
  }

  function LimparText() {
    setPesso("");
    setAltura("");
    setcolor("#c5c5c5");
    setObs("");
    setnumResult(0);
  }

  return (
    <View style={styles.Container}>
      <Title />

      <ResultArea color={color} numResult={numResult.toFixed(1)} obs={obs} />

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
          value={altura}
          onChangeText={(valor) => setAltura(valor)}
        />
      </View>
      <View style={styles.iput}>
        <MaterialCommunityIcons name="scale-bathroom" size={24} color="black" />
        <TextInput
          style={{ flex: 1, paddingHorizontal: 12 }}
          placeholder="Pesso"
          keyboardType="numeric"
          value={pesso}
          onChangeText={(valor) => setPesso(valor)}
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={calcularImc}>
        <Text style={styles.btnText}>Calcular</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={LimparText}>
        <Text style={styles.btnText}>Novamente</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
    justifyContent: "center",
    padding: "10%",
    marginTop: 15,
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
    marginBottom: 25,
  },
  btnText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Calc;
