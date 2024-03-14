import {StyleSheet} from 'react-native';

export default style = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    flex: 1,
  },
  box: {
    backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 2,
  },
  header: {
    flex: 1,
    backgroundColor: 'lightgreen',
    borderRadius: 2,
  },
  modalcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemscontainer: {
    backgroundColor: 'white',
    padding: 40,
    borderRadius: 10,
    shadowColor: 'red',
    elevation: 5,
    shadowOpacity: 0.5,
  },
});
