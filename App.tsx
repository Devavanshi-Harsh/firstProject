import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

const App = () => {
  const [data, setData] = useState('Harsh Devavanshi');
  return (
    <View>
      <Text>Handle Input</Text>
      <Text>This is state value {data}</Text>
      <TextInput
        style={internalStyle.textInput}
        placeholder="Enter your data"
        value={data}
        onChangeText={e => setData(e)}
      />
      <Button title="reset" onPress={() => setData('')} />
    </View>
  );
};
export default App;
const internalStyle = StyleSheet.create({
  textInput: {
    color: 'white',
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'blue',
    padding: 5,
    fontSize: 20,
    margin: 4,
    borderRadius: 5,
  },
});
