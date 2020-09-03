import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
// import { Text } from "react-native";

import styles from "./styles";

export default function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>; //style
}
