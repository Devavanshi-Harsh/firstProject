import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default App = () => {
  const [display, setDisplay] = useState(true);
  return (
    <View style={style.boxes}>
      <View style={style.box1}>
        <Text style={{backgroundColor: 'orange', margin: 10, flex: 1}}></Text>
        <Text style={{backgroundColor: 'grey', margin: 10, flex: 1}}></Text>
        <Text style={{backgroundColor: 'skyblue', margin: 10, flex: 1}}></Text>
      </View>
      <View style={style.box2}>
        <Text>Box2</Text>
      </View>
      <View style={style.box3}>
        <Text>Box3</Text>
      </View>
      <View style={style.box4}>
        <Text>Box4</Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  boxes: {
    flex: 1,
    backgroundColor: 'grey',
  },
  box1: {
    flex: 2,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  box2: {
    flex: 1,
    backgroundColor: 'green',
  },
  box3: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  box4: {
    flex: 1,
    backgroundColor: 'blue',
  },
});
