import {
  Button,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Images from "../../utils/images";
import colors from "../../utils/colors";

const Landing = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{}}>
        <Image
          source={Images.splash}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View
        style={{ flexDirection: "row", alignSelf: "center", marginBottom: 90 }}
      >
        <Pressable
          style={styles.Button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttontext}>Login</Text>
        </Pressable>
        <Pressable
          style={styles.Button}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.buttontext}>Register</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  Button: {
    height: 40,
    width: 120,
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignSelf: "center",
    marginHorizontal: 20,
    borderRadius: 9,
  },
  buttontext: {
    color: "white",
    textAlign: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
  },
});
