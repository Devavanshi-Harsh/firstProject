import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [name, setName] = useState("Harsh Devavanshi");
  return (
    <View>
      <User name = "Harsh Devavanshi" />
    </View>
  );
};
export default App;

const User= (props)=>{
  return <View >
    <Text style={{color:"blue", fontSize:30}}>My name is {props.name}</Text>
  </View>
}
