import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    backgroundImg: {
        width: '100%',
        height: '100%'
    },
    container:{
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        color: 'white',
        fontSize: 35,
        marginTop: 15,
        marginBottom: 15,
        alignSelf: 'flex-start'
    },
    text:{
        color: 'white',
        fontSize: 16,
    },
    underline: {
        textDecorationLine: 'underline'
    },
});

export default globalStyles;