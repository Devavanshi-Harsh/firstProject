import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default App = () => {
  const [check, setCheck] = useState(0);
  return (
    <View style={style.main}>
      <TouchableOpacity onPress={() => setCheck(1)}>
        <View style={style.radioWrapper}>
          <View style={style.radio}>
            {check === 1 && <View style={style.radioBg}></View>}
          </View>
          <View>
            <Text style={style.radioText}>Radio 1</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCheck(2)}>
        <View style={style.radioWrapper}>
          <View style={style.radio}>
            {check === 2 && <View style={style.radioBg}></View>}
          </View>
          <View>
            <Text style={style.radioText}>Radio 1</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioWrapper: {margin: 10, flexDirection: 'row', alignItems: 'center'},
  radio: {
    borderWidth: 1,
    borderColor: 'black',
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10,
  },
  radioBg: {
    backgroundColor: 'black',
    width: 40,
    height: 40,
    borderRadius: 50,
    margin: 4,
  },
  radioText: {
    padding: 10,
    fontSize: 20,
  },
});
