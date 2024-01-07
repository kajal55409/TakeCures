import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import Images from "../../utils/images";

export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Landing");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      {/* <StatusBar backgroundColor={Colors.ButtonColor} animated barStyle='dark-content' networkActivityIndicatorVisible showHideTransition='slide' /> */}
      <Image source={Images.splash} resizeMode="contain" style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
