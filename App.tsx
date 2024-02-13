import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default App = () => {
  const skills = [
    {
      id: 0,
      skill: 'Kotlin',
    },
    {
      id: 1,
      skill: 'Java',
    },
    {
      id: 2,
      skill: 'Ruby',
    },
    {
      id: 3,
      skill: 'C++',
    },
    {
      id: 4,
      skill: 'Python',
    },
    {
      id: 5,
      skill: 'JavaScript',
    },
  ];
  const [check, setCheck] = useState(0);
  return (
    <View style={style.main}>
      {skills.map((item, index) => {
        return (
          <TouchableOpacity onPress={() => setCheck(index)} key={index}>
            <View style={style.radioWrapper}>
              <View style={style.radio}>
                {check === item.id && <View style={style.radioBg}></View>}
              </View>
              <View>
                <Text style={style.radioText}>{item.skill}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
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
