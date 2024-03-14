import React from 'react';
import {Modal, View, Text, Button} from 'react-native';
import style from './Style';
const UpdateUserScreen = props => {
  console.warn(props.updateUserData);
  return (
    <Modal visible={props.showModal} transparent={true}>
      <View style={style.modalcontainer}>
        <View style={style.itemscontainer}>
          <Text>
            Update User {props.updateUserData.name} with ID:{' '}
            {props.updateUserData.id}
          </Text>
          <Button
            title="Close"
            color={'green'}
            onPress={() => props.setShowModal(false)}
          />
        </View>
      </View>
    </Modal>
  );
};
export default UpdateUserScreen;
