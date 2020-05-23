import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1
    },
    navItemStyle: {
        padding: 10
    },
    navSectionStyle: {
        backgroundColor: 'lightgrey'
    },
    sectionHeadingStyle: {
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    footerContainer: {
        padding: 20,
        backgroundColor: 'lightgrey'
    },
    DrawerContentScrollView: {
        padding: 0
    },
    DrawerItemList: {
        borderRadius: 0,
        width: '100%',
        marginLeft: 0,
        paddingLeft: 20
    },
    DrawerItemListLabel: {
        color: 'black'
    },
    DrawerItemCustom: {
        marginLeft: 20
    },
    DrawerItemCustomLabel: {
        color: 'black'
    }
});

export default styles;
