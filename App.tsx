import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import style from './components/Style';
type User = {id: number; name: string; age: number; degree: string};
export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch('http://192.168.1.5:3000/users');
    const data = await response.json();
    setUsers(data);
  };

  return (
    <View style={style.container}>
      <View style={style.box}>
        <Text style={style.header}>Name</Text>
        <Text style={style.header}>Age</Text>
        <Text style={style.header}>Degree</Text>
        <Text style={{...style.header, flex: 2}}>Operation</Text>
      </View>
      {users.length &&
        users.map((item, index) => (
          <View style={style.box} key={index}>
            <View style={{flex: 1}}>
              <Text>{item.name}</Text>
            </View>
            <View style={{flex: 1}}>
              <Text>{item.age}</Text>
            </View>
            <View style={{flex: 1}}>
              <Text>{item.degree}</Text>
            </View>
            <View style={{flex: 1}}>
              <Button title="Delete" color="red" />
            </View>
            <View style={{flex: 1}}>
              <Button title="Update" />
            </View>
          </View>
        ))}
    </View>
  );
}
