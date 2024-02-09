import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import UserData from './components/UserData';

const App = () => {
  const users = [
    {id: 1, name: 'Harsh', email: 'h@gmail.com'},
    {id: 2, name: 'Babloo Yadav', email: 'h@gmail.com'},
    {id: 3, name: 'Suhail Khan', email: 's@gmail.com'},
    {id: 4, name: 'Sahil Khan', email: 'sa@gmail.com'},
    {id: 5, name: 'Abbas Khan', email: 'abb@gmail.com'},
    {id: 6, name: 'Rehan Khan', email: 're@gmail.com'},
    {id: 7, name: 'Sunaina Afridee', email: 'sun@gmail.com'},
    {id: 8, name: 'Amal Kurma', email: 'amal@gmail.com'},
    {id: 10, name: 'Nawab Khan', email: 'nawa@gmail.com'},
    {id: 11, name: 'Sameera Alam', email: 'sameera@gmail.com'},
    {id: 12, name: 'Khusboo Parveen', email: 'khus@gmail.com'},
    {id: 13, name: 'Sana Begum', email: 'sana@gmail.com'},
  ];
  return (
    <View>
      {users.map(item => (
        <UserData data={item} />
      ))}
    </View>
  );
};
export default App;
