import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

export default App = () => {
  const [data, setData] = useState([]);

  const fetchAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    fetchAPIData();
  }, []);

  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => (
        <View
          key={index}
          style={{borderWidth: 1, borderRadius: 4, borderColor: 'red'}}>
          <Text style={styles.text}>ID: {item.id}</Text>
          <Text style={styles.text}>User ID: {item.userId}</Text>
          <Text style={styles.text}>Title: {item.title}</Text>
          <Text style={styles.text}>Body: {item.body}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 10,
    backgroundColor: 'skyblue',
  },
});
