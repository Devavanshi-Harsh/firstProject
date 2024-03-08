import React, {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {FlatList, SectionList, Text, View} from 'react-native';
export default App = () => {
  const [data, setData] = useState('');

  const fetchAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    fetchAPIData();
  }, []);
  return (
    <View>
      <Text>API Call</Text>
      {data ? (
        <View>
          <Text style={{fontSize: 20}}>User ID: {data.userId}</Text>
          <Text style={{fontSize: 20}}>ID: {data.id}</Text>
          <Text style={{fontSize: 20}}>Title: {data.title}</Text>
          <Text style={{fontSize: 20}}>Body : {data.body}</Text>
        </View>
      ) : null}
    </View>
  );
};
