import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

const App = () => {
  const users = [
    {id: 1, name: 'Harsh'},
    {id: 2, name: 'Babloo Yadav'},
    {id: 3, name: 'Suhail Khan'},
  ];
  return (
    <View>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <Text style={internalStyle.listItems}>{item.name}</Text>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default App;
const internalStyle = StyleSheet.create({
  listItems: {
    color: 'blue',
    borderWidth: 2,
    borderColor: 'blue',
    padding: 15,
    fontSize: 20,
    margin: 6,
    borderRadius: 5,
  },
});
