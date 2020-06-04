import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    banner: {
        backgroundColor: 'black',
        flex: 1,
        flexDirection: 'row',
        marginBottom: -5,
        marginTop: -5
    },
    bannerPhoto: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    photo: {
        borderColor: 'white',
        borderRadius: 100 / 2,
        borderWidth: 4,
        height: 100,
        width: 100,
        marginTop: 40,
        marginBottom: 40,
        resizeMode: 'cover'
    },
    bannerInfo: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    bannerText: {
        color: 'white',
        fontSize: 18,
        lineHeight: 30
    },
    star: {
        color: 'yellow',
        fontSize: 18
    }
});

export default styles;
