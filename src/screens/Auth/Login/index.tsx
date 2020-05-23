import { StackNavigationProp } from '@react-navigation/stack';
import {Container, Content} from 'native-base';
import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, View, Alert} from 'react-native';
import { RootStackParamList } from '../../../../App';
import BasicButton from '../../../UI/Button/BasicButton';
import BasicInput from '../../../UI/Input/BasicInput';
import globalStyles from '../../../../src/assets/styles/index.style';
import styles from './index.style';
import { btnRedStyle } from '../../../UI/Button/BasicButton/index.style';
import CryptoJS from "react-native-crypto-js";

type LoginScreenNavigationProps = StackNavigationProp<RootStackParamList, 'LoginScreen'>;

interface LoginScreenProps {
    navigation: LoginScreenNavigationProps;
}

export type passwordIconName = 'eye' | 'eye-slash';

interface FormData {
    passwordIconName: passwordIconName;
    hidePassword: boolean;
}

interface UserData {
    username: string;
    password: string;
}

const LoginScreen: React.FunctionComponent<LoginScreenProps> = props => {
    const { navigation } = props;

    const [formData, setFormData] = useState<FormData>({
        hidePassword: true,
        passwordIconName: 'eye',
    });

    const [userData, setUserData] = useState<UserData>({
        username: '',
        password: ''
    });

    const switchPasswordHidden = () => {
        const { hidePassword } = formData;
        setFormData({
            hidePassword: !hidePassword,
            passwordIconName: hidePassword ? 'eye-slash' : 'eye'
        });
    };

    const normalLogin = () => {
        fetch('http://localhost:3000/api/player/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: userData.username,
                password: CryptoJS.AES.encrypt(userData.password, "Versus team, the best developers").toString()
            })
        }).then((responseMessage) => {
            const r = JSON.parse(JSON.stringify(responseMessage));
            const usr = r.headers.map.user;
            if(r.status === 400){
                Alert.alert("Error", "El usuario no existe");
            }else if(r.status === 500){
                Alert.alert("Error", "Contraseña incorrecta");
            }else if(r.status === 201){
                navigation.navigate('HomeScreen', {
                    user: usr
                });
            }
        });
    };

    return (
        <Container>
            <ImageBackground source={require('../../../assets/backgroundBlue.png')} style={globalStyles.backgroundImg}>
                <Content>
                    <ScrollView>
                        <View style={globalStyles.container}>
                            <Image source={require('../../../assets/logoRNM.png')} style={globalStyles.logo} />

                            <Text style={globalStyles.title}>
                                Iniciar Sesion
                            </Text>

                            <BasicInput
                                placeholder={"Nombre de usuario"}
                                value={userData.username}
                                onChangeText={value => setUserData({ ...userData, username: value })}
                                disabled={false}
                                iconLeft={'user'}
                            />
                            <BasicInput
                                placeholder={"Contraseña"}
                                value={userData.password}
                                security={formData.hidePassword}
                                onChangeText={text => setUserData({ ...userData, password: text })}
                                iconLeft={'lock'}
                                iconRight={formData.passwordIconName}
                                fnIconRight={switchPasswordHidden}
                            />
                            <BasicButton style={btnRedStyle} disabled={false} labelButton={'ENTRAR'} onPress={normalLogin} />

                            <Image source={require('../../../assets/google.png')} style={styles.google} />

                            <Text style={globalStyles.text}>
                                {'¿No tienes una cuenta? '}
                                <Text onPress={() => navigation.navigate('SignupScreen')}
                                      style={globalStyles.textBold}>
                                    {'Registrate'}
                                </Text>
                            </Text>
                        </View>
                    </ScrollView>
                </Content>
            </ImageBackground>
        </Container>
    );
};

export default LoginScreen;
