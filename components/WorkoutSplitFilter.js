import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { WorkOutSplit } from "../Preset";

const WorkoutSplitFilter = ({ onSelectCategory, selectedCategory }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {WorkOutSplit.map((split, index) => {
        const isSelected = selectedCategory === split.split;

        return (
          <View
            style={[
              styles.container,
              { backgroundColor: isSelected ? "white" : "#CE0E2D" },
            ]}
            key={split.id}
          >
            <Text
              style={{
                color: isSelected ? "#CE0E2D" : "white",
                fontFamily: "bvpl",
              }}
              onPress={() => onSelectCategory(split.split)}
            >
              {split.split}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default WorkoutSplitFilter;

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 16,
  },
});
