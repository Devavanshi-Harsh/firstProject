import React from 'react';
import {Button, Text, View} from 'react-native';

const App = () => {
  var data = 100;
  function clickHandler1() {
    data += 100;
    console.warn(data);
  }
  function clickHandler2() {
    data += 100;
    console.warn(data);
  }

  return (
    <View>
      <Text>data</Text>
      <Button title="on Press 1" color={'red'} onPress={clickHandler1} />
      <Button
        title="on Press 2"
        color={'green'}
        onPress={() => clickHandler2()}
      />
      <Button title="on Press 3" color={'blue'} />
      <Button title="on Press 4" color={'yellow'} />
      <Button title="on Press 5" color={'orange'} />
    </View>
  );
};
export default App;
