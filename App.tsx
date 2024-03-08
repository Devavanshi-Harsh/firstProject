import React from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './components/Login';
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
const style = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: 'rgba(40,40,40,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});
