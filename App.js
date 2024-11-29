import { useState } from "react";
import { StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";

export default function App() {
  const [listGoals, setListGoals] = useState([]);

  function addGoals(inputGoalValue) {
    setListGoals((currentList) => [
      ...currentList,
      {
        id: Math.random().toString(),
        value: inputGoalValue,
      },
    ]);
  }
  function deleteGoal(id) {
    setListGoals((currentList) => currentList.filter((goal) => goal.id !== id));
  }
  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoals} />
      <GoalList listGoals={listGoals} deleteGoal={deleteGoal} />
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
});
