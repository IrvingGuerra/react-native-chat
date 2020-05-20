import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    logo: {
        width: '80%',
        height: 200,
        resizeMode: 'contain',
    },
    textLine: {
        color: 'white',
        textAlign: 'center',
        margin: 15
    },
    textLineUnderline: {
        color: 'white',
        textAlign: 'center',
        textDecorationLine: 'underline',
        margin: 15
    },
    button: {
        borderRadius: 20,
        marginTop: 10,
        marginLeft: '15%',
        marginRight: '15%'
    }
});

export default styles;
