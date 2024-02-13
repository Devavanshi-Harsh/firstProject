import React, {useState} from 'react';
import {ActivityIndicator, Button, StyleSheet, View} from 'react-native';

export default App = () => {
  const [check, setCheck] = useState(true);
  return (
    <View style={style.main}>
      <Button
        title={`${check ? 'Hide' : 'Show'} Indicators`}
        color={check ? 'red' : 'green'}
        onPress={() => setCheck(!check)}
      />
      <ActivityIndicator size={'large'} color={'red'}></ActivityIndicator>
      {check && (
        <ActivityIndicator
          size={200}
          color={'green'}
          animating={true}></ActivityIndicator>
      )}
      <ActivityIndicator size={'small'} color={'blue'}></ActivityIndicator>
      {check && (
        <ActivityIndicator size={100} color={'yellow'}></ActivityIndicator>
      )}
    </View>
  );
};
const style = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
