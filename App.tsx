import React, {useEffect} from 'react';
import {Routes} from './src'
import { AppRegistry, AsyncStorage, View, StyleSheet, ImageBackground } from 'react-native';
// import { url } from 'inspector';
// import { Text, TextInput, Button, Modal } from 'react-native';
// import globalStyles from './src/components/globalStyles';

 export default function App() {

  useEffect(() => {
    (async () => {
      const userRegistry = await AsyncStorage.getItem('userRegistry')
      if(!userRegistry) {
        AsyncStorage.setItem('userRegistry', JSON.stringify([]));
      }
    })()
  }, [])

   return ( 
      <ImageBackground source={require('./src/assets/background-image.jpg')} style={styles.image}>
         <View style={styles.container}>
        {/* <View style={globalStyles.container}>
            <Text style={globalStyles.headerText}>Login</Text>
            <View style={globalStyles.hr}/>
            <Text style={globalStyles.subText}>Username</Text>
            <TextInput
                style={globalStyles.input}
                data-testId={'userNameInput'}
                autoFocus={true}
            />
            <Text style={globalStyles.subText}>Password</Text>
            <TextInput
                style={globalStyles.input}
                data-testId={'passwordInput'}
                secureTextEntry={true}
            />
            <Text style={globalStyles.text}>Register</Text>
      </View> */}
            <Routes />
        </View>
      </ImageBackground>
   );
  }

AppRegistry.registerComponent('AwesomeProject', () => App)

const styles = StyleSheet.create({
  container: {
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover'
  }
});