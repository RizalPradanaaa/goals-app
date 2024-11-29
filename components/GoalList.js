import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function GoalList({ listGoals, deleteGoal }) {
  return (
    <View style={styles.listGoals}>
      <FlatList
        data={listGoals}
        renderItem={({ item }) => (
          <Text style={styles.goalItem} onPress={() => deleteGoal(item.id)}>
            {item.value}
          </Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listGoals: {
    flex: 3,
    marginTop: 10,
  },
  goalItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "purple",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    color: "white",
  },
});
