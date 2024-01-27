import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    centeredView: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'top',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 10,
      padding: 10,
    },
    buttonOpen: {
      backgroundColor: 'black',
    },
    buttonClose: {
      backgroundColor: 'black',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 0,
      textAlign: 'center',
    },
  });


export default styles;