import { StatusBar } from "expo-status-bar";
import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

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
  const { appTitle } = useSelector((state) => state);
  return (
    <View style={styles.container}>
      <Text>{appTitle}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
