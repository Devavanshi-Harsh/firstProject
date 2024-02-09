import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

const App = () => {
  const users = [
    {id: 1, name: 'Harsh'},
    {id: 2, name: 'Babloo Yadav'},
    {id: 3, name: 'Suhail Khan'},
    {id: 4, name: 'Sahil Khan'},
    {id: 5, name: 'Abbas Khan'},
    {id: 6, name: 'Rehan Khan'},
    {id: 7, name: 'Sunaina Afridee'},
    {id: 8, name: 'Amal Kurma'},
    {id: 10, name: 'Nawab Khan'},
    {id: 11, name: 'Sameera Alam'},
    {id: 12, name: 'Khusboo Parveen'},
    {id: 13, name: 'Sana Begum'},
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
