import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import AppText from "./AppText/AppText";
import colors from "../config/colors";

export default function ListItem({ title, subtitle, image, onPress }) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subtitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subtitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});
