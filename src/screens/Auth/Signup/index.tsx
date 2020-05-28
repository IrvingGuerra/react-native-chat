import { StackNavigationProp } from '@react-navigation/stack';
import {Container, Content} from 'native-base';
import React, { useState } from 'react';
import {Image, ImageBackground, ScrollView, Text, View, Alert} from 'react-native';
import { RootStackParamList, SELECTED_SERVER } from '../../../../App';
import BasicButton from '../../../UI/Button/BasicButton';
import BasicInput from '../../../UI/Input/BasicInput';
import globalStyles from '../../../../src/assets/styles/index.style';
import { btnRedStyle } from '../../../UI/Button/BasicButton/index.style';

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
        username: 'iguerraRN',
        email: 'guerravargasirvin@gmail.com',
        gender: 'Male',
        birthday: '1997-09-19',
        phone: {
            lada: '+52',
            number: 5531044967,
        },
        password: '123'

    });

    const switchPasswordHidden = () => {
        const { hidePassword } = formData;
        setFormData({
            hidePassword: !hidePassword,
            passwordIconName: hidePassword ? 'eye-slash' : 'eye'
        });
    };

    const registerPlayer = async () => {
        let response = await fetch('http://'+SELECTED_SERVER+'/api/player/register', {
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
            Alert.alert("Register", data.body.message);
        }else{
            // Error
            Alert.alert("Error", data.body.message);
        }

    };

    return (
        <Container>
            <ImageBackground source={require('../../../assets/bg.png')} style={globalStyles.backgroundImg}>
                <Content>
                    <ScrollView>
                        <View style={globalStyles.container}>
                            <Image source={require('../../../assets/logoRNM.png')} style={globalStyles.logo} />
                            <Text style={globalStyles.title}>
                                Registro
                            </Text>
                            <BasicInput
                                placeholder={"Nombre"}
                                value={userData.firstName}
                                onChangeText={value => setUserData({ ...userData, firstName: value })}
                                disabled={false}
                                iconLeft={'user'}
                            />
                            <BasicInput
                                placeholder={"Apellido"}
                                value={userData.lastName}
                                onChangeText={value => setUserData({ ...userData, lastName: value })}
                                disabled={false}
                                iconLeft={'user'}
                            />
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
                                placeholder={"Genero"}
                                value={userData.gender}
                                onChangeText={value => setUserData({ ...userData, gender: value })}
                                disabled={false}
                                iconLeft={'venus-mars'}
                            />
                            <BasicInput
                                placeholder={"Cumpleaños"}
                                value={userData.birthday}
                                onChangeText={value => setUserData({ ...userData, birthday: value })}
                                disabled={false}
                                iconLeft={'calendar'}
                            />
                            <BasicInput
                                placeholder={"Lada"}
                                value={userData.phone.lada}
                                onChangeText={value => setUserData({ ...userData, phone: { ...userData.phone, lada: value }})}
                                disabled={false}
                                iconLeft={'calendar'}
                            />
                            <BasicInput
                                placeholder={"Telefono"}
                                value={userData.phone.number.toString()}
                                onChangeText={value => setUserData({ ...userData, phone: { ...userData.phone, number: parseInt(value) }})}
                                disabled={false}
                                iconLeft={'calendar'}
                                keyboardType={"number-pad"}
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
