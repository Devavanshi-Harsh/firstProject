import React, {useState} from 'react';
import {View, StatusBar, Button} from 'react-native';
import {style} from './style';

export default App = () => {
  const [check, setCheck] = useState(false);
  return (
    <View style={style.main}>
      <StatusBar
        backgroundColor={'orange'}
        barStyle={'dark-content'}
        hidden={check}
      />
      <Button
        title={`${check ? 'show' : 'hide'} Status Bar`}
        onPress={() => setCheck(!check)}
      />
    </View>
  );
};
