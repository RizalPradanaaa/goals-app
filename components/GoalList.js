import React from "react";
import { FlatList, StyleSheet, Text, Pressable, View } from "react-native";

export default function GoalList({ listGoals, deleteGoal }) {
  return (
    <View style={styles.listGoals}>
      <FlatList
        data={listGoals}
        renderItem={({ item }) => (
          <Pressable
            style={styles.goalItem}
            onPress={() => deleteGoal(item.id)}
          >
            <Text style={{ color: "dark" }}> {item.value}</Text>
          </Pressable>
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
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    color: "white",
  },
});
