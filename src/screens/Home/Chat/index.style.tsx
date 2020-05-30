import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        width: '100%'
    },
    header:{
        height: '10%'
    },
    chat:{
        height: '75%',
    },
    msn: {
        height: '15%',
        justifyContent: 'flex-end',
        paddingBottom: 15
    }

});

export default styles;
