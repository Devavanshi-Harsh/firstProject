import React from 'react';
import {View, Text} from 'react-native';
import College from './components/College';
type user = {
  name: String;
  age: number;
  college: String;
  collegeArea: String;
};

function App(): React.JSX.Element {
  return (
    <View>
      <Text style={{color: 'red', fontSize: 33}}>Hello! World</Text>
      <User
        name="Harsh Devavanshi"
        age={26}
        college="Delhi University"
        collegeArea="Delhi"
      />
      <User
        name="Seema Yadav"
        age={25}
        college="Allahabad University"
        collegeArea="Allahabad"
      />
    </View>
  );
}
export default App;

const User = (props: user) => {
  return (
    <View>
      <Text style={{fontSize: 30}}>
        Name: {props.name}, Age: {props.age}, His college is{' '}
        <College college={props.college} collegeArea={props.collegeArea} />
      </Text>
    </View>
  );
};
