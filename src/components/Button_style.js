import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Button_style = () => {
  return (
    <View>
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
  )
}

export default Button_style

const styles = StyleSheet.create({})