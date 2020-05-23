import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Icon } from 'native-base';
import * as React from 'react';
import { RootStackParamList } from '../../../../App';
import BannerProfile from '../../../UI/Banner/Profile/index';
import ConfigurationScreen from '../../Configuration/index';
import styles from './index.style';

type HomeScreenNavigationProps = StackNavigationProp<RootStackParamList>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'HomeScreen'>;

interface HomeScreenProps {
    navigation: HomeScreenNavigationProps;
    route: HomeScreenRouteProp;
}

// tslint:disable-next-line: no-any
const createSlideMenu = (props: any) => {
    const { navigation } = props;
    return (
        <DrawerContentScrollView {...props} style={styles.DrawerContentScrollView}>
            <BannerProfile userName={'Irving'} stars={'5.5'} rankClass={'Heroico'} />
            <DrawerItemList
                {...props}
                activeTintColor={'#979797'}
                activeBackgroundColor={'#979797'}
                itemStyle={styles.DrawerItemList}
                labelStyle={styles.DrawerItemListLabel}
            />
            <DrawerItem
                style={styles.DrawerItemCustom}
                labelStyle={styles.DrawerItemCustomLabel}
                icon={drawerProps => <Icon name="exit" {...drawerProps} />}
                label="Cerrar sesión"
                onPress={() => navigation.navigate('LoginScreen')}
            />
        </DrawerContentScrollView>
    );
};

const Drawer = createDrawerNavigator();

const HomeScreen: React.FunctionComponent<HomeScreenProps> = props => {
    const { route, navigation } = props;
    const { user } = route.params;
    console.log("PIRNTTT")
    console.log(user)
    return (
        // tslint:disable-next-line: no-any
        <Drawer.Navigator drawerStyle={{ width: '90%' }} drawerContent={(data: any) => createSlideMenu(data)}>
            <Drawer.Screen
                options={{ drawerIcon: () => <Icon name="cog" {...props} /> }}
                name="Configuración"
                component={ConfigurationScreen}
            />
        </Drawer.Navigator>
    );
};

export default HomeScreen;
