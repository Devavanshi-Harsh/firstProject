import React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import style from './style';
const Stack = createNativeStackNavigator();
export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Log In" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Home = () => {
  return (
    <View style={style.box}>
      <Text style={style.text}>This is Home Component</Text>
    </View>
  );
};
const Login = props => {
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
