import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authenticateUser = () => {

  }

  return (
    <View style={{ flex: 1, margin: 10 }}>
      <Text>Login screen</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
      />
      <Button 
        title="Log in"
        color="purple"
        onPress={() => authenticateUser()}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    height: 40,
    padding: 20,
    borderColor: "gray",
    borderWidth: 1,
  },
});
