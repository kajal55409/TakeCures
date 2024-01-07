import { Dimensions,ScrollView, StyleSheet, Text, View,Image,SafeAreaView, TextInput, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from "react";
import Images from '../../utils/images'
import colors from '../../utils/colors'
import { FontAwesome , AntDesign ,MaterialCommunityIcons,SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Register = () => {

  const navigation = useNavigation();
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;
 
    const [FullName,setFullName] = useState('');
    const [Phone_Number,setPhone_Number] = useState('');
    const [Gender,setGender] = useState('');
    const [Dob,setDob] = useState('');
    const [email, setEmail] = useState(" ");

  return (
    <SafeAreaView style={{flex:1}}>
        <ScrollView>
        <View style={{}}>
        <View>
          <Image
            source={Images.signup}
            resizeMode="contain"
            style={styles.image}
          />
          </View>

          <Text
            style={{
              textAlign: "left",
              fontSize: 25,
              fontWeight: "600",

              color: colors.blue,
              padding:10
            }}
          >
            Register Here
          </Text>

          <View style={{height:'50%',width:'95%',alignSelf:'center',}}>
     

<View style={{marginHorizontal:5}}> 
<Pressable style={{ marginTop: 15, }}>
<View style={styles.heading_icon_style}> 
<View>
            <Text style={styles.heading_text}>
              {" "}
              Full Name
            </Text>
            </View>
            <View>
            <SimpleLineIcons name="user" size={20} color="gray" />
            </View>
            </View>
            <View style={[styles.Inputview]}>

              <TextInput
                placeholder=""
                value={FullName}
                onChangeText={(text) => setFullName(text)}
                placeholderTextColor="gray"
                keyboardType="default"
              />

            </View>
           
          </Pressable>
          <Pressable style={{ marginTop: 15, }}>
<View style={styles.heading_icon_style}>
            <Text style={styles.heading_text}>
              {" "}
            Phone Number
            </Text>
            <View style={{}}>
              <FontAwesome name="mobile-phone" size={29} color="gray" style={styles.icon_style}/>
              </View>
            </View>

            <View style={[styles.Inputview]}>
            <View>
              <TextInput
                placeholder=""
                value={Phone_Number}
                onChangeText={(text) => setPhone_Number(text)}
                placeholderTextColor="#727272"
                keyboardType='number-pad'
                maxLength={10}
              />
              </View>
            
            </View>
            
          </Pressable>

          <Pressable style={{ marginTop: 15, }}>
          <View style={styles.heading_icon_style}>
            <Text style={styles.heading_text}>
              {" "}
            Gender
            </Text>
            <View style={{}}>
              <AntDesign name="downcircleo" size={20} color="gray" />
              </View>
</View>
            <View style={[styles.Inputview]}>
            <View>
              <TextInput
                placeholder=""
                value={Gender}
                onChangeText={(text) => setGender(text)}
                placeholderTextColor="#727272"
                keyboardType="default"
              />
              </View>
           
            </View>
            
          </Pressable>
          <Pressable style={{ marginTop: 15, }}>
          <View style={styles.heading_icon_style}>
            <Text style={styles.heading_text}>
              {" "}
            Date Of Birth
            </Text>

            <View style={{}}>
              <AntDesign name="calendar" size={20} color="gray" />
              </View>
            </View>

            <View style={[styles.Inputview]}>
            <View>
              <TextInput
                placeholder=""
                value={Dob}
                onChangeText={(text) => setDob(text)}
                placeholderTextColor="#727272"
                keyboardType="default"
              />
              </View>
             
            </View>
            
          </Pressable>
          <Pressable style={{ marginTop: 15, }}>
          <View style={styles.heading_icon_style}>


            <Text style={styles.heading_text}>
              {" "}
            Email (Optional)
            </Text>
            <View style={{}}>
              <MaterialCommunityIcons name="email-outline" size={24} color="gray" />
              </View>
            </View>

            <View style={[styles.Inputview]}>
            <View>
              <TextInput
                placeholder=""
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholderTextColor="#727272"
                keyboardType="default"
              />
              </View>
            
            </View>
            
          </Pressable>
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
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
    Inputview: {
        // backgroundColor: "#E8E8E8",
        // height: 50,
        // padding: 15,
        // borderRadius: 8,
    
        borderBottomWidth: 0.3,
        borderBottomColor:'black',
        // backgroundColor: "green",
        paddingBottom: 6,
        // flexDirection: "row",
        justifyContent:'space-between',
        marginHorizontal:5,
      
      },
      heading_text:{
        color: "black", fontSize: 15, fontWeight: "600",
        marginVertical:5
      },
      icon_style:{
        justifyContent:'flex-end'
      },
      button: {
        backgroundColor: colors.blue,
        height: 55,
        justifyContent: "center",
        borderRadius: 15,
        marginTop: "7%",
      },
      heading_icon_style:{
        flexDirection:'row',justifyContent:'space-between'
      },
})