import React from 'react';
import {Text, View, Pressable} from 'react-native';
import {style} from './style';

export default App = () => {
  return (
    <View style={style.main}>
      <Pressable
        style={style.pressableContainer}
        onPress={() => console.warn('Normal Press')}
        onLongPress={() => console.warn('Long Press')}
        onPressIn={() => console.warn('Press In')}
        onPressOut={() => console.warn('Press Out')}>
        <Text style={style.pressableText}>Pressable Text</Text>
      </Pressable>
    </View>
  );
};
