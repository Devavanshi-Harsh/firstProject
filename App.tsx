import React, {useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import ExStyles from './ExternalStyle'

const App = () => {
  const [name, setName] = useState("Harsh Devavanshi");
  return (
    <View>
      {/* inline styles */}
      <Text style = {{fontSize:20, color:"red"}}>Lorem ipsum dolor sit amet.</Text>
      {/* Internal styles */}
      <Text style={internalStyle.bomb}>Lorem ipsum dolor sit amet.</Text>
      <Text style={internalStyle.bomb}>Lorem ipsum dolor sit amet.</Text>
      <Text style={internalStyle.bomb}>Lorem ipsum dolor sit amet.</Text>
      <Text style={ExStyles.water}>Lorem ipsum dolor sit amet.</Text>
      <Text style = {ExStyles.clay}>Lorem ipsum dolor sit amet.</Text>
    </View>
  );
};
export default App;
const internalStyle = StyleSheet.create(
  {
    bomb:{
      color:"yellow",
      backgroundColor: "black",
      borderWidth: 3,
      borderColor:"green",
      padding: 5,
      fontSize:20,
      margin: 4,
      borderRadius: 5
    }
  }
)