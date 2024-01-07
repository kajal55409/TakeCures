import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import colors from "../../utils/colors";
import Images from "../../utils/images";

const Login = () => {
  const [email, setEmail] = useState(" ");

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{}}>
          <Image
            source={Images.login}
            resizeMode="contain"
            style={styles.image}
          />
        </View>

        <View style={{ flex: 1, padding: 24 }}>
          <Text
            style={{
              textAlign: "left",
              fontSize: 28,
              fontWeight: "600",

              color: colors.blue,
            }}
          >
            Log In
          </Text>

          <View style={{ marginTop: 20 }}>
            <Text style={{ color: "gray", fontSize: 15, fontWeight: "500" }}>
              {" "}
              Phone Number
            </Text>
            <View style={[styles.Inputview]}>
              <Text> +91 </Text>
              <TextInput
                placeholder=" "
                value={email}
                onChangeText={(text) => setEmail(text)}
                maxLength={10}
                placeholderTextColor="#727272"
                keyboardType="number-pad"
              />
            </View>
          </View>

          <Pressable
            onPress={() => navigation.navigate("Otp")}
            style={styles.button}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontWeight: "600",
                color: "white",
              }}
            >
              Send Otp
            </Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Register")} style={{flexDirection:'row',alignSelf:'center',marginTop: "8%",}}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
                color: 'gray',
                textAlign: "center",
                
              }}
            >
              Not a member ? 
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
                color: colors.blue,
                textAlign: "center",
                
                marginLeft:8
              }}
            >
             Register Now
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  Inputview: {
    // backgroundColor: "#E8E8E8",
    // height: 50,
    // padding: 15,
    // borderRadius: 8,

    borderBottomWidth: 0.5,
    marginTop: 15,
    paddingBottom: 10,
    flexDirection: "row",
  },

  button: {
    backgroundColor: colors.blue,
    height: 55,
    justifyContent: "center",
    borderRadius: 15,
    marginTop: "15%",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
