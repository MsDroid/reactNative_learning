import React from 'react';
import { Text, StyleSheet } from 'react-native';


// style 
const Styles = StyleSheet.create({
  textStyle: {
    color: "red",
  }
})

// stateless functional component
const App = () => {
  return (
    <Text style={Styles.textStyle}>Hello world</Text>
  );
}



export default App;