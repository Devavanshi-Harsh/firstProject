import React, {useState} from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';
import {json} from 'stream/consumers';

export default App = () => {
  const [check, setCheck] = useState(false);
  return (
    <View style={style.main}>
      <Text>OS is : {Platform.OS} \n</Text>
      <Text style={style.platformText}>
        This font will be orange if IOS device otherwise Red for Android Device
      </Text>
    </View>
  );
};
export const style = StyleSheet.create({
  main: {
    margin: 10,
  },
  platformText: {
    color: Platform.OS == 'android' ? 'red' : 'green',
    fontSize: 15,
  },
});
