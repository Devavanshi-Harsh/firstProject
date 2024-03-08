import {Pressable, Text, View} from 'react-native';

export default Cart = props => {
  return (
    <View>
      <Pressable
        style={{backgroundColor: 'grey', borderRadius: 5}}
        onPress={() => {
          props.clickHandler('Short Press');
        }}
        onLongPress={() => {
          props.clickHandler('Long Press');
        }}
        onPressIn={() => {
          props.clickHandler('Press in');
        }}
        onPressOut={() => {
          props.clickHandler('Press out');
        }}>
        <Text style={{color: 'white', fontSize: 20, padding: 5}}>
          Another Component
        </Text>
      </Pressable>
    </View>
  );
};
