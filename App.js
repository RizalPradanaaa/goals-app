import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [listGoals, setListGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function toggleModalVisibility() {
    setModalVisible((prevState) => !prevState);
  }

  function handleAddGoal(inputGoalValue) {
    setListGoals((currentList) => [
      ...currentList,
      {
        id: Math.random().toString(),
        value: inputGoalValue,
      },
    ]);
  }

  function handleDeleteGoal(id) {
    setListGoals((currentList) => currentList.filter((goal) => goal.id !== id));
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Button
          title="Add New Goal"
          color={"#9c088a"}
          onPress={toggleModalVisibility}
        />
        <GoalInput
          onAddGoal={handleAddGoal}
          modalVisible={modalVisible}
          modalHandler={toggleModalVisibility}
        />
        <GoalList listGoals={listGoals} deleteGoal={handleDeleteGoal} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
  },
});
