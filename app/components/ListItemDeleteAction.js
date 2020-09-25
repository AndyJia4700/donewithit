import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ListItemDeleteAction() {
  return (
    <TouchableWithoutFeedback onPress={console.log()}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="trash-can" size={35} color="white" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
