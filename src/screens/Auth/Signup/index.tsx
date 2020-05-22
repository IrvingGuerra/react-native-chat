import { StackNavigationProp } from '@react-navigation/stack';
import {Container, Content} from 'native-base';
import React, { useState } from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import { RootStackParamList } from '../../../../App';
import BasicButton from '../../../UI/Button/BasicButton';
import BasicInput from '../../../UI/Input/BasicInput';
import globalStyles from '../../../../src/assets/styles/index.style';
import { btnRedStyle } from '../../../UI/Button/BasicButton/index.style';
import Meteor from 'react-native-meteor';
const SERVER_URL = 'ws://localhost:27017/websocket';

type SignupScreenNavigationProps = StackNavigationProp<RootStackParamList, 'SignupScreen'>;

interface SignupScreenProps {
    navigation: SignupScreenNavigationProps;
}

export type passwordIconName = 'eye' | 'eye-slash';

interface FormData {
    passwordIconName: passwordIconName;
    hidePassword: boolean;
}

interface UserData {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    gender: string;
    birthday: string;
    phone: {
        lada: string;
        number: Number;
    }
    password: string;
}

const SignupScreen: React.FunctionComponent<SignupScreenProps> = props => {
    const { navigation } = props;

    const [formData, setFormData] = useState<FormData>({
        hidePassword: true,
        passwordIconName: 'eye',
    });

    const [userData, setUserData] = useState<UserData>({
        firstName: 'Irving',
        lastName: 'Guerra',
        username: 'iguerra',
        email: 'guerravargasirving@gmail.com',
        gender: 'Male',
        birthday: '1997-09-19',
        phone: {
            lada: '+52',
            number: 5531044967,
        },
        password: ''

    });

    const switchPasswordHidden = () => {
        const { hidePassword } = formData;
        setFormData({
            hidePassword: !hidePassword,
            passwordIconName: hidePassword ? 'eye-slash' : 'eye'
        });
        Meteor.connect(SERVER_URL);
    };

    const registerPlayer = () => {
        if(userData.username != ''){
            console.log("Registrara");
            console.log(userData);
            Meteor.call('playerSignup',  userData , (err, res) => {
                // Do whatever you want with the response
                console.log('playerSignup', err, res);
            });
        }
    };

    return (
        <Container>
            <ImageBackground source={require('../../../assets/backgroundBlue.png')} style={globalStyles.backgroundImg}>
                <Content>
                    <ScrollView>
                        <View style={globalStyles.container}>
                            <Image source={require('../../../assets/logoRNM.png')} style={globalStyles.logo} />
                            <Text style={globalStyles.title}>
                                Registro
                            </Text>
                            <BasicInput
                                placeholder={"Nombre de usuario"}
                                value={userData.username}
                                onChangeText={value => setUserData({ ...userData, username: value })}
                                disabled={false}
                                iconLeft={'user'}
                            />
                            <BasicInput
                                placeholder={"Correo electronico"}
                                value={userData.email}
                                onChangeText={value => setUserData({ ...userData, email: value })}
                                disabled={false}
                                iconLeft={'envelope'}
                                keyboardType={'email-address'}
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

                            <BasicButton style={btnRedStyle} disabled={false} labelButton={'REGISTRARSE'} onPress={registerPlayer} />

                            <Text style={globalStyles.text}>
                                {'¿Ya tienes una cuenta? '}
                                <Text onPress={() => navigation.navigate('LoginScreen')}
                                      style={globalStyles.textBold}>
                                    {'Inicia Sesión'}
                                </Text>
                            </Text>

                        </View>
                    </ScrollView>
                </Content>
            </ImageBackground>
        </Container>
    );
};

export default SignupScreen;
