import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Container, Icon } from 'native-base';
import React, { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { RootStackParamList } from '../../../App';
import BasicButton from '../../UI/Button/BasicButton';
import { btnGrayStyle, btnRedStyle } from '../../UI/Button/BasicButton/index.style';
import BasicHeader from '../../UI/Header/BasicHeader';
import BasicInput from '../../UI/Input/BasicInput';
import styles from './index.style';

type ConfigurationScreenNavigationProps = DrawerNavigationProp<RootStackParamList, 'ConfigurationScreen'>;

interface ConfigurationScreenProps {
    navigation: ConfigurationScreenNavigationProps;
}

const ConfigurationScreen: React.FunctionComponent<ConfigurationScreenProps> = props => {
    const { navigation } = props;

    const [range, setRange] = useState([0]);
    const [userData, setUserData] = useState({
        firstname: 'Irving',
        lastname: 'Guerra',
        phone: '5531044967',
        email: 'iguerra@antware.mx',
        range: 10
    });
    const [disabled, setDisabled] = useState({
        firstname: true,
        lastname: true,
        range: true
    });

    return (
        <Container>
            <ScrollView>
                <BasicHeader icon={'menu'} onPress={() => navigation.openDrawer()} titleHeader={'Configuración'} />
                <View style={styles.containerCenter}>
                    <Image style={styles.photo} source={require('../../assets/userPhoto.png')} />
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

                <View style={styles.rangeInput}>
                    <View style={styles.rangeInfo}>
                        <Icon style={styles.icon} type="FontAwesome" name="info-circle" />
                    </View>
                    <View style={styles.rangeText}>
                        <Text style={styles.textTitle}>Radio de búsqueda</Text>
                        <Text style={styles.textValue}>{userData.range} km</Text>
                    </View>
                </View>

                <BasicButton style={btnGrayStyle} labelButton={'Guardar'} onPress={() => null} />
                <BasicButton style={btnRedStyle} labelButton={'Eliminar Cuenta'} onPress={() => null} />
            </ScrollView>
        </Container>
    );
};

export default ConfigurationScreen;
