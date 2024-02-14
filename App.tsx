import React, {useState} from 'react';
import {Text, Button, Modal, StyleSheet, View} from 'react-native';
import {style} from './style';

export default App = () => {
  const [check, setCheck] = useState(true);
  return (
    <View style={style.main}>
      <Modal transparent={true} visible={check} animationType="fade">
        <View style={style.modalContainer}>
          <View style={style.textContainer}>
            <Text style={style.modalText}>This is the data to show</Text>
            <Button title="close modal" onPress={() => setCheck(false)} />
          </View>
        </View>
      </Modal>
      <View>
        <Button title="Show Modal" onPress={() => setCheck(true)} />
      </View>
    </View>
  );
};
