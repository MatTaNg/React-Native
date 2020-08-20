import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Modal, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import globalStyles from '../globalStyles';

export interface MattsModalProps {
    redirect?: any;
    onClose: any;
}

export const MattsModal = ({redirect, onClose}: MattsModalProps) => {
    return (
        <Modal
            onRequestClose={onClose}
            onDismiss={onClose}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Hello World!</Text>

            <TouchableHighlight
              onPress={onClose}
            >
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
        </Modal>    
    )
}

const styles = StyleSheet.create({
    centeredView: {
        alignItems: 'center',
        justifyContent: 'center'
      },
      modalView: {
        position: 'absolute',
        margin: 'auto',
        top : 50,
        left: '30%',
        zIndex: 1,
        width: 500,
        height: 50
        // margin: 20,
        // backgroundColor: "white",
        // borderRadius: 20,
        // padding: 35,
        // alignItems: "center",
        // shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 2
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5
      }
});