import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'black',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        paddingHorizontal: 15
    },
    mainBody: {
        flex: 6
    },
    scrollView: {
        marginBottom: 20
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    }
});

export default styles;
