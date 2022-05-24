import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function AssetExample() {
  return (
    <View style={style.container}>
      <Text style={style.paragraph}>
        Local files and assets can be imported
      </Text>
      <Image style={style.logo} source={require("./assets/favicon.png")} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
    height: 128,
    width: 128,
  },
});
