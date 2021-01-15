import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ flex: 1, margin: 10 }}>
      <Text>Login screen</Text>
      <TextInput
        placeholder="Password"
        style={styles.input}
        onChangeText={() => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        onChangeText={() => setPassword(text)}
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
