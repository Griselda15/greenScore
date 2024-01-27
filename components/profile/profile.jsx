import React, {useState} from 'react';
import {Alert, Modal, Text, Pressable, TouchableOpacity, View, Image} from 'react-native';
import styles from './style.js';


const Profile = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
    <View style={styles.centeredView}>
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
            </View>
        </View>
        </Modal>
        <Pressable
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Image source = {require('../../assets/avatar.png')} style = {{height: 40, width:40}} />
        </Pressable>
    </View>
    );
};


export default Profile;