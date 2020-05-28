import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';
import { Container, Icon } from 'native-base';
import React, { useState, useEffect } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { RootStackParamList } from '../../../../App';
import BasicButton from '../../../UI/Button/BasicButton';
import { btnGrayStyle, btnRedStyle } from '../../../UI/Button/BasicButton/index.style';
import BasicHeader from '../../../UI/Header/BasicHeader';
import BasicInput from '../../../UI/Input/BasicInput';
import styles from './index.style';
import globalStyles from "../../../assets/styles/index.style";

type ConfigurationScreenNavigationProps = DrawerNavigationProp<RootStackParamList, 'ConfigurationScreen'>;
type ConfigurationScreenRouteProp = RouteProp<RootStackParamList, 'ConfigurationScreen'>;

interface ConfigurationScreenProps {
    navigation: ConfigurationScreenNavigationProps;
    route: ConfigurationScreenRouteProp;
}

const ConfigurationScreen: React.FunctionComponent<ConfigurationScreenProps> = props => {
    const { route, navigation } = props;
    const { user } = route.params;
    const usuario = JSON.parse(user);

    const [userData, setUserData] = useState({
        firstname: usuario.profile.firstName,
        lastname: usuario.profile.lastName,
        phone: usuario.profile.phone.number.toString(),
        email: usuario.emails[0].address,
    });

    const [disabled, setDisabled] = useState({
        firstname: true,
        lastname: true,
    });

    return (
        <Container>
            <ScrollView>
                <BasicHeader icon={'menu'} onPress={() => navigation.openDrawer()} titleHeader={'Configuración'} />
                <View style={globalStyles.container}>
                    <View style={styles.containerCenter}>
                        <Image style={styles.photo} source={require('../../../assets/userPhoto.png')} />
                    </View>

                    <BasicInput
                        value={userData.firstname}
                        onChangeText={value => setUserData({ ...userData, firstname: value })}
                        disabled={disabled.firstname}
                        iconRight={'pencil'}
                        fnIconRight={() => setDisabled({ ...disabled, firstname: !disabled.firstname })}
                    />

                    <BasicInput
                        value={userData.lastname}
                        onChangeText={value => setUserData({ ...userData, lastname: value })}
                        disabled={disabled.lastname}
                        iconRight={'pencil'}
                        fnIconRight={() => setDisabled({ ...disabled, lastname: !disabled.lastname })}
                    />

                    <BasicInput value={userData.phone} disabled={true} />

                    <BasicInput value={userData.email} disabled={true} />

                    <BasicButton style={btnGrayStyle} labelButton={'Guardar'} onPress={() => null} />
                    <BasicButton style={btnRedStyle} labelButton={'Eliminar Cuenta'} onPress={() => null} />
                </View>
            </ScrollView>
        </Container>
    );
};


export default ConfigurationScreen;
