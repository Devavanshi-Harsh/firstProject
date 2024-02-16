import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import style from './style';
export default App = () => {
  const [display, setDisplay] = useState(false);

  return (
    <View style={style.container}>
      {display && (
        <View style={style.model}>
          <View style={style.body}>
            <Text style={style.text}>This is custom Modal</Text>
            <Button title="Close It" onPress={() => setDisplay(false)} />
          </View>
        </View>
      )}
      <Button title="Open Custom Modal" onPress={() => setDisplay(true)} />
    </View>
  );
};
