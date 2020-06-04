import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerBlack: {
        backgroundColor: 'black',
        elevation: 10,
        shadowOpacity: 0.8,
        shadowColor: 'gray',
        shadowOffset: {
            height: 5,
            width: 0
        }
    },
    headerLeft: {
        flex: 1
    },
    headerCenter: {
        alignItems: 'center',
        flex: 6
    },
    headerTitle: {
        color: 'white',
        fontSize: 18
    },
    headerRight: {
        flex: 1
    },
    iconHeader: {
        color: 'white'
    }
});

export default styles;
