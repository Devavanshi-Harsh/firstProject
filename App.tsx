import {Component} from 'react';
import {Text, View} from 'react-native';
import User from './components/User';
import Student from './components/Student';

class App extends Component {
  render() {
    return (
      <View>
        <Text>This is App Class Component</Text>
        <Student name = "Rahul" />
      </View>
    );
  }
}
export default App;
