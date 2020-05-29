import { StyleSheet } from 'react-native';

export const inputWhiteStyle = StyleSheet.create({
    item: {
        backgroundColor: 'transparent',
        marginTop: 5,
        marginBottom: 5,
        paddingRight: 10,
        paddingLeft: 10,
        borderBottomWidth: 2
    },
    input: {
        color: 'rgba(255,255,255,1)'
    },
    icon: {
        color: 'rgba(255,255,255,1)',
        fontSize: 20
    }
});

export const inputBlackStyle = StyleSheet.create({
    item: {
        backgroundColor: 'transparent',
        marginTop: 5,
        marginBottom: 5,
        paddingRight: 10,
        paddingLeft: 10,
        borderBottomWidth: 2
    },
    input: {
        color: 'rgba(0,0,0,1)'
    },
    icon: {
        color: 'rgba(0,0,0,1)',
        fontSize: 20
    }
});

export const inputDisabledStyle = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        borderRadius: 12,
        marginTop: 5,
        marginBottom: 5,
        paddingRight: 10,
        paddingLeft: 10
    },
    input: {
        color: 'rgba(0,0,0,0.4)'
    },
    icon: {
        color: 'rgba(0,0,0,0.4)'
    }
});
