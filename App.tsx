import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

type User = {
  id: number;
  name: string;
  age: number;
  degree: string;
};

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [degree, setDegree] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.1.5:3000/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const saveUserData = async () => {
    try {
      const response = await fetch('http://192.168.1.5:3000/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, age: parseInt(age), degree}),
      });
      const data = await response.json();
      setUsers([...users, data]);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Name"
        style={{backgroundColor: 'yellow', color: 'blue'}}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Age"
        style={{backgroundColor: 'yellow', color: 'blue'}}
        onChangeText={text => setAge(text)}
      />
      <TextInput
        placeholder="Degree"
        style={{backgroundColor: 'yellow', color: 'blue'}}
        onChangeText={text => setDegree(text)}
      />
      <Button title="Save Data" onPress={() => saveUserData()} />
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={{borderWidth: 1, borderRadius: 4, borderColor: 'red'}}>
            <Text>ID: {item.id}</Text>
            <Text>User Name: {item.name}</Text>
            <Text>Age: {item.age}</Text>
            <Text>Degree: {item.degree}</Text>
          </View>
        )}
      />
    </View>
  );
}
