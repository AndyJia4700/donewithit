import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  const handlePress = () => console.log("Image Pressed");
  const buttonPress = () =>
    Alert.alert("My Title", "My Message", [
      { text: "Yes", onPress: () => console.log("Yes") },
      { text: "No", onPress: () => console.log("No") },
    ]);

  console.log(Dimensions.get("screen"));
  console.log(useDimensions());
  console.log(useDeviceOrientation());

  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={[styles.container]}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? "100%" : "30%",
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "black",
            width: 100,
            height: 300,
            alignSelf: "flex-start",
          }}
        />
        <View
          style={{
            backgroundColor: "white",
            width: 100,
            height: 200,
          }}
        />
        <View
          style={{
            backgroundColor: "tomato",
            width: 100,
            height: 100,
          }}
        />
      </View>
      <Text numberOfLines={1}>Hello my iphone</Text>
      {/* <Image source={require("./assets/icon.png")} /> */}
      <TouchableHighlight onPress={handlePress}>
        <Image
          blurRadius={0}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>

      <Button title="click me" onPress={buttonPress} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
