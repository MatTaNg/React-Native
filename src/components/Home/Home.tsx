import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { getAll, User } from '../../LocalStorage';
import globalStyles from '../globalStyles';

export const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            const userRegistry = await getAll();
            if(!userRegistry) backToLogin()
            setUsers(userRegistry);
        })()
    }, []);

    const renderItem = (user: User) => {
        return <Text style={globalStyles.subText}>{user.userName}</Text>
    }
    
    const emptyState = () => {
        return <Text style={globalStyles.subText}>No Registered Users</Text>
    }

    const backToLogin = () => {
        Actions.login()
    }
    if(users.length === 0) return emptyState();
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.headerText}>Users</Text>
            <View style={globalStyles.hr}/>
            <FlatList 
                data={users}
                renderItem={(list) => renderItem(list.item)}
            />
            <View style={globalStyles.hr}/>
            <Text data-testId={'signOut'} onPress={backToLogin}>Sign Out</Text>
        </View>
    )
}