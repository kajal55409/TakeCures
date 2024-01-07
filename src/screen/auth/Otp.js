import { StyleSheet, Text, View,Image,Pressable, TextInput ,SafeAreaView,TouchableOpacity} from "react-native";
import React from "react";

import Images from "../../utils/images";
import Common_style from '../../utils/Common_style'
import colors from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";

const Otp = () => {

// export default class Otp extends Component {

  const navigation =useNavigation()
  // componentDidMount=()=>{
  //   this.refs.nameref.focus()
  // }


  // render(){

  return ( 
<SafeAreaView style={{flex:1,backgroundColor:'white'}}>
  <View>
    <Image  source={Images.otp} // images added to the otp container
       resizeMode="contain"
            style={{alignSelf:'center',
    marginTop:40}}
    />

    <View>
         <Text
            style={{
              textAlign: "left",
              fontSize: 25,
              fontWeight: "600",
textAlign:'center',
              color: colors.blue,
              padding:10
            }}
          >
            Otp Verification
          </Text>


<View style={{alignSelf:'center',width:'90%',flexDirection:'row',justifyContent:'space-around',marginTop:'10%'}}>
          <View style={{width:'10%',}}>
<TextInput 
  // ref={"nameref"}
  placeholder={''}
  autoFocus={true}
  maxLength={1}
  keyboardType='phone-pad'
  style={{borderBottomWidth:2,textAlign:'center',}}
/>

          </View>
          <View style={{width:'10%',}}>
<TextInput 
  // ref={"nameref"}
  placeholder={''}
  autoFocus={true}
  maxLength={1}
  keyboardType='phone-pad'
  style={{borderBottomWidth:2,textAlign:'center'}}
/>

          </View>

          <View style={{width:'10%',}}>
<TextInput 
  // ref={"nameref"}
  placeholder={''}
  autoFocus={true}
  maxLength={1}
  keyboardType='phone-pad'
  style={{borderBottomWidth:2,textAlign:'center'}}
/>

          </View>

          <View style={{width:'10%',}}>
<TextInput 
  // ref={"nameref"}
  placeholder={''}
  autoFocus={true}
  maxLength={1}
  keyboardType='phone-pad'
  style={{borderBottomWidth:2,textAlign:'center'}}
/>

          </View>

        

          </View>



          <View style={{marginTop:'10%',flexDirection:'row',alignSelf:'center'}}>
            <Text style={{color:'gray'}}>Don't received an OTP?</Text>
            <Text style={{fontWeight:'600',color:colors.blue,marginLeft:5}}> Resend OTP</Text>
          </View>
          </View>
          <Pressable
            onPress={() => navigation.navigate("Home")}
            style={{    backgroundColor: colors.blue,
              height: 55,
              justifyContent: "center",
              borderRadius: 15,
              marginTop: "20%",
              marginHorizontal:10}}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontWeight: "600",
                color: "white",
              }}
            >
              Confirm Otp
            </Text>
          </Pressable>
  </View>


</SafeAreaView>
  );
};

export default Otp;

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor:'white',
//   },
//   image:{
//     alignSelf:'center',
//     marginTop:40
//   },
//   button: {
//     backgroundColor: colors.blue,
//     height: 55,
//     justifyContent: "center",
//     borderRadius: 15,
//     marginTop: "47%",
//     marginHorizontal:10
//   },
  
// });
