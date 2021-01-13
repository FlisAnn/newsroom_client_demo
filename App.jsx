import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useSelector} from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';

 const App = () => {
   const {appTitle} = useSelector(state => state)
  return (
    <View style={styles.container}>
      <Text>{appTitle}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e49599',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
  },
 
});
export default App