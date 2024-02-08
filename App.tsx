import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [display, setDisplay] = useState(false);
  function resetHandler() {
    setName('');
    setPassword('');
    setEmail('');
    setDisplay(false);
  }
  return (
    <View>
      <TextInput
        style={internalStyle.textInput}
        placeholder="Enter your name"
        value={name}
        onChangeText={e => setName(e)}
      />
      <TextInput
        style={internalStyle.textInput}
        placeholder="Enter password"
        secureTextEntry={true}
        value={password}
        onChangeText={e => setPassword(e)}
      />
      <TextInput
        style={internalStyle.textInput}
        placeholder="Enter your email address"
        value={email}
        onChangeText={e => setEmail(e)}
      />
      <Button color={'green'} title="Print" onPress={() => setDisplay(true)} />
      <Button color={'red'} title="reset" onPress={resetHandler} />
      {display && (
        <View>
          <Text>Name : {name}</Text>
          <Text>Password : {password}</Text>
          <Text>Email Address : {email}</Text>
        </View>
      )}
    </View>
  );
};
export default App;
const internalStyle = StyleSheet.create({
  textInput: {
    color: 'blue',
    borderWidth: 2,
    borderColor: 'blue',
    padding: 15,
    fontSize: 20,
    margin: 6,
    borderRadius: 5,
  },
});
