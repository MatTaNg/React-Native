import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        width: wp('25%'),
        padding: 30,
        fontSize: 16,
        borderWidth: 5
      },
    text: {
        fontSize: 16
    },
    headerText: {
        fontSize: 45,
        textAlign: 'center'
    },
    subText: {
      fontSize: 25
    },
    input: {
        marginTop: 10,
        marginBottom: 10,
        padding: 5,
        fontSize: 16
    },
    error: {
        color: 'red',
        paddingBottom: 10,
        fontSize: 16
    },
    hr: {
        borderWidth: 1,
        borderColor:'black',
        marginTop:20,
        marginBottom:20
    }
  });