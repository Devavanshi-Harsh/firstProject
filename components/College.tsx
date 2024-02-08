import React from 'react';
import {Text, View} from 'react-native';
type college = {
  college: String;
  collegeArea: String;
};
const College = (props: college) => {
  return (
    <View>
      <Text>
        {props.college} and is located within {props.collegeArea} area.
      </Text>
    </View>
  );
};

export default College;
