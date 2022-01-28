import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import CustomComponent from './src/screens/CustomComponent';


// style 
const Styles = StyleSheet.create({
  textStyle: {
    color: "red",
  }
})

const getFullName = (firstName, secondName) => {
  return `${firstName} ${secondName}`;
}

// stateless functional component
const App = () => {
  const myName = "MsDroid";
  const myElement = <Text>Thanks for watching me</Text>
  return (
    <View>
      <Text style={Styles.textStyle}>Hello Friend {myName}</Text>
      <CustomComponent />
      {myElement}
      <Text>Hi my name is {getFullName('Ms', 'Droid')}</Text>
    </View>
  );
}



export default App;