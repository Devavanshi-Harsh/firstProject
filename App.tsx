import React from 'react';
import {Text, View, StyleSheet, SectionList} from 'react-native';

const App = () => {
  const users = [
    {
      name: 'Harsh',
      data: ['Web Development', 'Data Structures', 'Networking'],
    },
    {
      name: 'Babloo Yadav',
      data: ['Database Management', 'Software Engineering', 'Cybersecurity'],
    },
  ];

  return (
    <View style={styles.container}>
      <SectionList
        sections={users}
        renderItem={({item}) => <Text>{item}</Text>}
        renderSectionHeader={({section: {name}}) => (
          <Text style={styles.sectionHeader}>{name}</Text>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: '#fff',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#ccc',
    padding: 10,
  },
});

export default App;
