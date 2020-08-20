import { AsyncStorage } from 'react-native';

const USER_REGISTRY = 'userRegistry'

export interface User {
    userName: string,
    password: string
}

export const getAll = async (key: string = USER_REGISTRY) => {
    const result = await AsyncStorage.getItem(key) || JSON.stringify([]);
    return JSON.parse(result);
}

export const addItem = async (newItem: User, key: string = USER_REGISTRY) => {
    const currentStorage = await getAll();
    const newStorage = JSON.stringify([...currentStorage, newItem])
    AsyncStorage.setItem(USER_REGISTRY, newStorage);
}

export const doesUserExist = async (userName: string, key: string = USER_REGISTRY) => {
    const currentStorage = await getAll();
    return currentStorage.some((current: User) => current.userName === userName);
}

export const contains = async (user: User) => {
       const currentStorage = await getAll();
       return currentStorage.some((current: User) => (
           current.userName === user.userName &&
           current.password === user.password
        ));
};