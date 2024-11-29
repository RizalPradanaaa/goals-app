import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [goalInput, setGoalInput] = useState("");
  const [listGoals, setListGoals] = useState([]);
  function goalInputHandler(inputValue) {
    setGoalInput(inputValue);
  }
  function addGoals(inputGoalValue) {
    setListGoals((currentList) => [...currentList, inputGoalValue]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputGoal}>
        <TextInput
          placeholder="Enter your goals"
          style={styles.TextInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={() => addGoals(goalInput)} />
      </View>
      <View style={styles.listGoals}>
        <FlatList
          data={listGoals}
          renderItem={(itemData) => (
            <Text style={styles.goalItem}>{itemData.item}</Text>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  inputGoal: {
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
  listGoals: {
    marginTop: 10,
  },
  goalItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "lightgrey",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  },
});
