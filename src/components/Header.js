import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../utils/colors";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Header = () => {
  return (
    <SafeAreaView style={styles.container}> 
    <View style={{justifyContent:'space-between',width:'95%',flexDirection:'row',alignSelf:'center'}} >
    <Entypo name="menu" size={24} color="black" />
    <Text style={{color:'black',fontWeight:'500',fontSize:19}}>TakeCures</Text>
<AntDesign name="logout" size={20} color="black" />
</View>
    
{/* <StatusBar></StatusBar> */}
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    // backgroundColor: colors.blue,
  },
});
