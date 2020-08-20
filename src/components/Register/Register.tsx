import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { doesUserExist, addItem } from '../../LocalStorage';
import globalStyles from '../globalStyles';

export enum testIds {
    userNameInput = 'userNameInput',
    passwordInput = 'passwordInput',
    submit = 'submit',
    cancel = 'cancel'
}

export const Register = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);

    const submit = async () => {
        const userExists = await doesUserExist(userName);
        if(userExists) {
            setIsError(true)
        }
        else {
            addItem({userName, password})
            Actions.login()
        }
    }

    const Cancel = () => {
        Actions.login()
    }

    const isDisabled = () => {
        if(userName === '') return true;
        if(password === '') return true;
        return false
    }

     const renderErrorText = () => {
        return (
            <Text style={globalStyles.error}>Username already exists!</Text>
        )
     }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.headerText}>Register</Text>
            <View style={globalStyles.hr}/>
            {isError && renderErrorText()}
            <Text style={globalStyles.subText}>Username</Text>
            <TextInput
                style={globalStyles.input}
                data-testId={'userNameInput'}
                onChangeText={text => setUserName(text)}
                value={userName}
                autoFocus={true}
            />
            <Text style={globalStyles.subText}>Password</Text>
            <TextInput
                style={globalStyles.input}
                data-testId={'passwordInput'}
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={true}
            />
            <Button disabled={isDisabled()} data-testId={'submit'} title={"Register"} accessibilityLabel="Submit" onPress={submit} />
            <Text style={globalStyles.text} data-testId={'cancel'} onPress={Cancel}>Cancel</Text>
    </View>
  )
}