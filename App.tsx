import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

export default App = () => {
  const [display, setDisplay] = useState(true);
  return (
    <View style={{flex: 1}}>
      <TouchableHighlight>
        <Text style={[style.button, style.success]}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[style.button, style.primary]}>Primary</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[style.button, style.warning]}>Warning</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[style.button, style.error]}>Error</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={style.button}>Button</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[style.button, style.soothing]}>Soothing</Text>
      </TouchableHighlight>
    </View>
  );
};
const style = StyleSheet.create({
  button: {
    fontSize: 20,
    margin: 10,
    backgroundColor: 'grey',
    padding: 10,
    shadowColor: 'green',
    elevation: 10,
    borderRadius: 10,
    textAlign: 'center',
    color: 'white',
  },
  success: {
    backgroundColor: 'green',
  },
  primary: {
    backgroundColor: 'blue',
  },
  warning: {
    backgroundColor: 'yellow',
  },
  error: {
    backgroundColor: 'red',
  },
  soothing: {
    backgroundColor: 'orange',
  },
});
