import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import Header from "../../components/Header";
import Swiper from "react-native-swiper";
import Images from "../../utils/images";
import colors from "../../utils/colors";



const Home = () => {
 return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <ScrollView style={{ flex: 1 }}>


        <View style={{ alignSelf: 'center', height: 250, bottom: 20 }}>
          <Swiper
            autoplay
            dot={
              <View
                style={{
                  backgroundColor: 'gray',
                  width: 5,
                  height: 5,
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3
                }}
              />
            }
            activeDot={
              <View
                style={{
                  backgroundColor: colors.orange,
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3
                }}
              />
            }
            paginationStyle={{
              bottom: -23,

              alignSelf: 'center'
            }}
            loop
          >
            <Image source={Images.takecure1} resizeMode="contain" style={styles.image} />
            <Image source={Images.takecure2} resizeMode="contain" style={styles.image} />
            <Image source={Images.takecure3} resizeMode="contain" style={styles.image} />
            <Image source={Images.takecure4} resizeMode="contain" style={styles.image} />
          </Swiper>
 </View>
        <View style={{ padding: 25 }}>
          <Text style={{ color: colors.blue, fontWeight: '600', fontSize: 20, }}>Lab Reports</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>

          <View style={styles.cardview}>
            <Image source={Images.radiology} resizeMode={'contain'} style={styles.icon_image} />
            <Text style={styles.icon_img_text}>Radiology Report</Text>
          </View>
          <View style={styles.cardview}>
            <Image source={Images.laboratory} resizeMode={'contain'} style={styles.icon_image} />
            <Text style={styles.icon_img_text}>Chemistry Report</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 30 }}>

          <View style={styles.cardview}>
            <Image source={Images.science} resizeMode={'contain'} style={styles.icon_image} />
            <Text style={styles.icon_img_text}>Science Report</Text>
          </View>
          <View style={styles.cardview}>
            <Image source={Images.blood} resizeMode={'contain'} style={styles.icon_image} />
            <Text style={styles.icon_img_text}>Blood Report</Text>
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'red',
  },
  image: {
    height: 300,
    width: '97%',
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    // flex:1
  },
  icon_image: {
    height: 120, width: 90,
    alignSelf: 'center'

  },
  icon_img_text: {
    textAlign: 'center', color: colors.blue, fontWeight: '400', fontSize: 15
  },

  cardview: {
    height: 170,
    width: '47%',
    backgroundColor: 'white',
    elevation: 2,
    // marginTop:10,
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.blue

  }
});
