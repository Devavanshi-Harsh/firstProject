import React from 'react';
import {Button, Pressable, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import style from './style';
const Stack = createNativeStackNavigator();
export default App = () => {
  function clickHandler(i: string) {
    console.warn('Click Handler', i);
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Log In"
          component={Login}
          options={{
            headerTitle: () => (
              <Button onPress={() => clickHandler('title')} title="Title" />
            ),
            headerLeft: () => (
              <Button onPress={() => clickHandler('left')} title="Left" />
            ),
            headerRight: () => <Cart clickHandler={clickHandler} />,
            headerStyle: {backgroundColor: 'blue'},
            headerTintColor: 'white',
            headerTitleStyle: {fontSize: 30},
          }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const Cart = props => {
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
const Home = props => {
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
