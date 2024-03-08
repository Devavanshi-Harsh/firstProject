import {Text, View, Button} from 'react-native';
import style from './Style';
export default Login = props => {
  return (
    <View style={style.box}>
      <Text style={style.text}>This is Login Component</Text>
      <Button
        title="Go to home"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};
