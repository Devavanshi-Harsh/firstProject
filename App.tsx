import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
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
    <ScrollView>
      <Text>API Call</Text>
      {data.length == 0 && (
        <Text style={{textAlign: 'center', fontSize: 40}}>Loading...</Text>
      )}
      {data
        ? data.map((item, index) => (
            <View key={index}>
              <Text style={{fontSize: 20, backgroundColor: 'grey'}}>
                ID: {item.id}
              </Text>
              <Text style={{fontSize: 10}}>User ID: {item.userId}</Text>
              <Text style={{fontSize: 10}}>Title: {item.title}</Text>
              <Text style={{fontSize: 10}}>Body : {item.body}</Text>
            </View>
          ))
        : null}
    </ScrollView>
  );
};
