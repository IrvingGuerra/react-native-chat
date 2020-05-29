import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';
import { Container, Icon } from 'native-base';
import React, { useState, useEffect } from 'react';
import {Alert, Image, ScrollView, Text, View} from 'react-native';
import {RootStackParamList, SELECTED_SERVER} from '../../../../App';
import BasicButton from '../../../UI/Button/BasicButton';
import { btnGrayStyle, btnRedStyle } from '../../../UI/Button/BasicButton/index.style';
import { inputBlackStyle } from '../../../UI/Input/BasicInput/index.style';
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
        idUser: usuario._id,
        firstname: usuario.profile.firstName,
        lastname: usuario.profile.lastName,
        username: usuario.username,
        email: usuario.emails[0].address,
        gender: usuario.profile.gender,
        birthday: usuario.profile.birthday,
        phone: {
            lada: usuario.profile.phone.lada,
            number: usuario.profile.phone.number,
        }
    });

    const [disabled, setDisabled] = useState({
        firstname: true,
        lastname: true,
        username: true,
    });

    const updatePlayer = async () => {
        let response = await fetch('http://'+SELECTED_SERVER+'/api/player/updatePlayerData', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            },
            body: JSON.stringify(userData)
        });
        let data = await response.json();
        if(data.statusCode === 201){
            Alert.alert("Update", data.body.message);
        }else{
            // Error
            Alert.alert("Error", data.body.message);
        }

    };

    const removePlayer = () => {
        Alert.alert(
            "Remove Account",
            "This action is irreversible, are you sure to permanently delete this account?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Delete account",
                    onPress: removeAccount
                }
            ],
            { cancelable: true }
        );
    };

    const removeAccount = async () => {
        let response = await fetch('http://'+SELECTED_SERVER+'/api/player/removePlayer', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            },
            body: JSON.stringify({idUser: userData.idUser})
        });
        let data = await response.json();
        if(data.statusCode === 201){
            navigation.navigate('LoginScreen');
        }else{
            // Error
            Alert.alert("Error", data.body.message);
        }
    };

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
                        style={inputBlackStyle}
                    />

                    <BasicInput
                        value={userData.lastname}
                        onChangeText={value => setUserData({ ...userData, lastname: value })}
                        disabled={disabled.lastname}
                        iconRight={'pencil'}
                        fnIconRight={() => setDisabled({ ...disabled, lastname: !disabled.lastname })}
                        style={inputBlackStyle}
                    />

                    <BasicInput
                        value={userData.username}
                        onChangeText={value => setUserData({ ...userData, username: value })}
                        disabled={disabled.username}
                        iconRight={'pencil'}
                        fnIconRight={() => setDisabled({ ...disabled, username: !disabled.username })}
                        style={inputBlackStyle}
                    />

                    <BasicInput value={userData.email} disabled={true} />

                    <BasicButton style={btnGrayStyle} labelButton={'Guardar'} onPress={updatePlayer} />
                    <BasicButton style={btnRedStyle} labelButton={'Eliminar Cuenta'} onPress={removePlayer} />
                </View>
            </ScrollView>
        </Container>
    );
};


export default ConfigurationScreen;
