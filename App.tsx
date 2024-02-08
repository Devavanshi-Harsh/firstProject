import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const App = () => {
  var data = 100;
  const [name, setName] = useState("Harsh Devavanshi");
  function clickHandler1() {
    data += 100;
    setName(name==="Harsh Devavanshi"?"Seema Yadav":"Harsh Devavanshi")
    console.warn(data);
  }

  return (
    <View>
      <Text>{data} and {name}</Text>
      <Button title="on Press 1" color={'blue'} onPress={clickHandler1} />
    </View>
  );
};
export default App;
