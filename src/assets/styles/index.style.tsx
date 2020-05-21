import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    backgroundImg: {
        width: '100%',
        height: '100%',
    },
    logo: {
        width: '50%',
        height: 200,
        resizeMode: 'contain',
        marginTop: 10,
        marginBottom: 30
    },
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20
    },
    title:{
        color: 'white',
        fontFamily: 'Arial',
        fontSize: 30,
        marginBottom: 20,
        alignSelf: 'flex-start'
    },
    text:{
        fontFamily: 'Arial',
        color: 'white',
        marginTop: 20,
        fontSize: 18
    },
    textUnderline: {
        textDecorationLine: 'underline',
    },
    textBold: {
        fontWeight: 'bold'
    }
});

export default globalStyles;