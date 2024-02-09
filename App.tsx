import {Component} from 'react';
import {Text, View} from 'react-native';
import User from './components/User';

class App extends Component {
  render() {
    return (
      <View>
        <Text>This is App Class Component</Text>
        <User />
      </View>
    );
  }
}
export default App;
