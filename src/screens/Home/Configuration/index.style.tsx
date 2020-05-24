import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerCenter: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 40
    },
    photo: {
        width: 150,
        height: 150
    },
    text: {
        marginLeft: 30,
        fontSize: 20,
        color: 'black',
        marginTop: 15
    },
    rangeInput: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20,
        width: 'auto'
    },
    rangeInfo: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    rangeText: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 10
    },
    textTitle: {
        fontSize: 18,
        color: 'rgba(0,0,0,0.7)'
    },
    textValue: {
        fontSize: 20
    },
    rangeEdit: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    icon: {
        color: 'rgba(0,0,0,0.4)'
    }
});

export default styles;
