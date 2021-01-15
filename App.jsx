import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./app/components/MainScreen";
import ArticleShow from "./app/components/ArticleShow";
import { Button } from "react-native";
import LoginScreen from "./app/components/LoginScreen";

const Stack = createStackNavigator();

const App = () => {
  const { appTitle } = useSelector(state => state);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={MainScreen}
          options={{
            headerRight: () => {
              return (
                <Button
                  title="Click me"
                  onPress={navigation.navigate("Login")}
                />
              );
            },
            title: appTitle,
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleStyle: {
              color: "white",
              fontSize: 23,
            },
          }}
        />
        <Stack.Screen name="ArticleShow" component={ArticleShow} />

        <Stack.Screen name="login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
