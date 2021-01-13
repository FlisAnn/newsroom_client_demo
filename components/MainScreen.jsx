import React from "react";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e49599",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
  },
});

const MainScreen = () => {
  const { appTitle, articles } = useSelector((state) => state);
  return (
    <View style={styles.container}>
      <Text>{appTitle}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default MainScreen;
