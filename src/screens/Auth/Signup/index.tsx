import { StackNavigationProp } from '@react-navigation/stack';
import {Container, Content} from 'native-base';
import React, { useState } from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import { RootStackParamList } from '../../../../App';
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
    username: string;
    email: string;
    password: string;
}

const SignupScreen: React.FunctionComponent<SignupScreenProps> = props => {
    const { navigation } = props;

    const [formData, setFormData] = useState<FormData>({
        hidePassword: true,
        passwordIconName: 'eye',
    });

    const [userData, setUserData] = useState<UserData>({
        username: '',
        email: '',
        password: ''

    });

    const switchPasswordHidden = () => {
        const { hidePassword } = formData;
        setFormData({
            hidePassword: !hidePassword,
            passwordIconName: hidePassword ? 'eye-slash' : 'eye'
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

                            <BasicButton style={btnRedStyle} disabled={false} labelButton={'REGISTRARSE'} onPress={() => navigation.navigate('LoginScreen')} />

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