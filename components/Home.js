import {Button, Text, View} from 'react-native';
import style from './Style';
export default Home = props => {
  return (
    <View style={style.box}>
      <Text style={style.text}>This is Home Component</Text>
      <Button
        title="Go to Login"
        onPress={() => props.navigation.navigate('Log In')}
      />
    </View>
  );
};
