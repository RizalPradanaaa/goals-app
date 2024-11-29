import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function GoalInput({ onAddGoal }) {
  const [goalInput, setGoalInput] = useState("");
  function goalInputHandler(inputValue) {
    setGoalInput(inputValue);
  }
  function addGoalHandler(input) {
    if (input === "") return;
    onAddGoal(input);
    setGoalInput("");
  }
  return (
    <View style={styles.inputGoal}>
      <TextInput
        placeholder="Enter your goals"
        style={styles.TextInput}
        value={goalInput}
        onChangeText={goalInputHandler}
      />
      <Button title="Add Goal" onPress={() => addGoalHandler(goalInput)} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputGoal: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  TextInput: {
    width: "70%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    marginRight: 5,
    padding: 10,
  },
});
