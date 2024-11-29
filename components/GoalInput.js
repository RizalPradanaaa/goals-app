import React, { useState } from "react";
import {
  Image,
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Alert,
} from "react-native";

export default function GoalInput({ onAddGoal, modalVisible, modalHandler }) {
  const [goalInput, setGoalInput] = useState("");

  function goalInputHandler(inputValue) {
    setGoalInput(inputValue);
  }

  function addGoalHandler(input) {
    if (input === "") {
      Alert.alert("Invalid Input", "Please enter a valid goal.", [
        { text: "OK", style: "cancel" },
      ]);
      return;
    }
    onAddGoal(input);
    setGoalInput("");
    modalHandler();
  }

  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.inputGoal}>
        <Image source={require("../assets/logo.png")} style={styles.image} />
        <TextInput
          placeholder="Enter your goals"
          style={styles.textInput}
          value={goalInput}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <Button title="Close" onPress={modalHandler} />
          <Button
            title="Add Goal"
            color={"#9c088a"}
            onPress={() => addGoalHandler(goalInput)}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputGoal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    backgroundColor: "#5e0acc",
  },
  textInput: {
    width: "80%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 10,
    backgroundColor: "white",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
});
