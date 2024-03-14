import React, {useEffect, useState} from 'react';
import {Button, Modal, Text, View} from 'react-native';
import style from './components/Style';
import UpdateUserScreen from './components/UpdateUserScreen';

type User = {id: number; name: string; age: number; degree: string};

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [updateUserData, setUpdateUserData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('http://192.168.1.5:3000/users');
    const data = await response.json();
    setUsers(data);
  };

  async function deleteData(id: number) {
    const url = `http://192.168.1.5:3000/users/${id}`;
    const response = await fetch(url, {
      method: 'delete',
    });
    if (response.ok) fetchData();
    else console.warn('Unable to delete data...');
  }
  const callModal = data => {
    setShowModal(true);
    setUpdateUserData(data);
  };
  return (
    <View style={style.container}>
      <View style={style.box}>
        <Text style={style.header}>Name</Text>
        <Text style={style.header}>Age</Text>
        <Text style={style.header}>Degree</Text>
        <Text style={{...style.header, flex: 2}}>Operation</Text>
      </View>
      {users.length > 0 &&
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
              <Button
                title="Delete"
                color="red"
                onPress={() => deleteData(item.id)}
              />
            </View>
            <View style={{flex: 1}}>
              <Button title="Update" onPress={() => callModal(item)} />
            </View>
          </View>
        ))}
      {showModal && (
        <UpdateUserScreen
          setShowModal={setShowModal}
          updateUserData={updateUserData}
        />
      )}
    </View>
  );
}
