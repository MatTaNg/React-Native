import React, { useState } from 'react';
import { Text, View, TextInput, Button, Modal } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { contains } from '../../LocalStorage';
import globalStyles from '../globalStyles';

export interface LoginProps {
}

export const Login = (props: any) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);

    const submit = async () => {
        const isExist = await contains({userName, password});
        if(isExist) Actions.home()
        else setIsError(true);
    }
    
    const register = () => {
        Actions.register()
    }

    const renderErrorText = () => {
        return (
            <Text style={globalStyles.error}>Invalid Credentials</Text>
        )
    }

    const isDisabled = () => {
        if(userName === '') return true;
        if(password === '') return true;
        return false
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.headerText}>Login</Text>
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
            <Button disabled={isDisabled()} data-testId={'submit'} title={"Login"} accessibilityLabel="Submit" onPress={submit} />
            <Text style={globalStyles.text} onPress={register}>Register</Text>
      </View>
    )
}