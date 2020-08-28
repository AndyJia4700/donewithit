//  type  'rsf'

import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function WelcomeScreen() {
  return <ImageBackground source={require("../assets/background.jpg")} />;
}

// type 'rnss
// const styles = StyleSheet.create({
// })

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
