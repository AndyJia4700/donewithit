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
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";

export default function App() {
  // return <WelcomeScreen />;
  // return <ViewImageScreen />;
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <View
    //     style={{
    //       backgroundColor: "dodgerblue",
    //       width: 100,
    //       height: 100,
    //       // borderWidth: 10,
    //       // borderColor: "royablue",
    //       // borderRadius: 50,
    //       // borderTopWidth: 20,
    //       // borderTopLeftRadius: 50,

    //       // shadowColor: "red",
    //       // shadowOffset: { width: 10, height: 10 },
    //       // shadowOpacity: 1,
    //       // shadowRadius: 10,

    //       //Android
    //       // elevation: 20,
    //     }}
    //   ></View>
    // </View>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText>I Love React Native</AppText>
    </View>
  );
}
