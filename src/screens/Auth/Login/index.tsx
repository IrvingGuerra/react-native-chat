// @ts-ignore
import { StackNavigationProp } from '@react-navigation/stack';
import {Container, Content} from 'native-base';
import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import { RootStackParamList } from '../../../../App';
import BasicButton from '../../../UI/Button/BasicButton';
import BasicInput from '../../../UI/Input/BasicInput';
import globalStyles from '../../../../src/assets/styles/index.style';
import styles from './index.style';

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

    return (
        <Container>
            <ImageBackground source={require('../../../assets/background.png')} style={globalStyles.backgroundImg}>
                <Content>
                    <ScrollView>
                        <View style={globalStyles.container}>
                            <Image source={require('../../../assets/logo.png')} style={styles.logo} />
                            <BasicInput
                                placeholder={"Nombre de usuario"}
                                value={userData.firstname}
                                onChangeText={value => setUserData({ ...userData, firstname: value })}
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
                            <BasicButton disabled={false} labelButton={'Entrar'} onPress={() => navigation.navigate('Home')} />
                            <Text style={globalStyles.text}>
                                {'¿No tienes una cuenta? '}
                                <Text onPress={() => navigation.navigate('SignupScreen')}
                                       style={globalStyles.underline}>
                                    {'¡Registrate aqui!'}
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
