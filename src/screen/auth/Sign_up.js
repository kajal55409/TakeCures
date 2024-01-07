import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Pressable,
  Image,
  Dimensions
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import colors from "../../utils/colors";
import Images from "../../utils/images";
import { AntDesign } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

const Sign_up = () => {

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [email, setEmail] = useState(" ");
  const [country, setCountry] = useState("Unknown");
  const [userGender, setGender] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState();
  const navigation = useNavigation();

  const pickerRef = useRef();


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{}}>
          <Image
            source={Images.signup}
            resizeMode="contain"
            style={styles.image}
          />
        </View>

        <View style={{ flex: 1, marginHorizontal: 24 }}>
          <Text
            style={{
              textAlign: "left",
              fontSize: 25,
              fontWeight: "600",

              color: colors.blue,
            }}
          >
            Register Here
          </Text>

          <Pressable style={{ marginTop: 15,backgroundColor:'red' }}>
            <Text style={{ color: "gray", fontSize: 15, fontWeight: "500" }}>
              {" "}
              Full Name
            </Text>
            <View style={[styles.Inputview]}>
              <TextInput
                placeholder="enter name "
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholderTextColor="#727272"
                keyboardType="default"
              />
            </View>
          </Pressable>

          <View style={{ marginTop: 15 }}>
            <Text style={{ color: "gray", fontSize: 15, fontWeight: "500" }}>
              {" "}
              Email
            </Text>
            <View style={[styles.Inputview]}>
              <TextInput
                placeholder="hello "
                value={email}
                onChangeText={(text) => setEmail(text)}
                maxLength={10}
                placeholderTextColor="#727272"
                keyboardType="number-pad"
              />
            </View>
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={{ color: "gray", fontSize: 15, fontWeight: "500" }}>
              {" "}
              Gender
            </Text>
            {/* <View style={[styles.Inputview]}> */}
            {/* <TextInput
                placeholder=" "
                value={email}
                onChangeText={(text) => setEmail(text)}
                maxLength={10}
                placeholderTextColor="#727272"
                keyboardType="number-pad"
              /> */}

            {/* <View style={styles.pickerview}>
              <Picker
                selectedValue={userGender}
                onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                style={{}}
              >
                <Picker.Item
                  style={{}}
                  color="gray"
                  label="Select Gender"
                  value=""
                />
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
              </Picker>
            </View> */}

            {/* </View> */}
          </View>

          <View style={{ marginTop: 35 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "gray", fontSize: 15, fontWeight: "500" }}>
                {" "}
                Date of Birth
              </Text>
              <AntDesign name="calendar" size={20} color="gray" />
            </View>
            <View style={[styles.Inputview]}>
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
          <View style={{ marginTop: 15 }}>
            <Text style={{ color: "gray", fontSize: 15, fontWeight: "500" }}>
              {" "}
              Phone Number
            </Text>
            <View style={[styles.Inputview]}>
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
            onPress={() => navigation.navigate("Home")}
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
              Sign In
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Sign_up;

const styles = StyleSheet.create({
  Inputview: {
    // backgroundColor: "#E8E8E8",
    // height: 50,
    // padding: 15,
    // borderRadius: 8,

    borderBottomWidth: 0.3,
    backgroundColor: "green",
    // paddingBottom: 10,
    flexDirection: "row",
  },

  button: {
    backgroundColor: colors.blue,
    height: 55,
    justifyContent: "center",
    borderRadius: 15,
    marginTop: "7%",
  },
  image: {
    height: "50%",
    width: "100%",
  },
  pickerview: {
    width: "100%",
    // height:30
  },
});
