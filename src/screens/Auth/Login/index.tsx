import { StackNavigationProp } from '@react-navigation/stack';
import {Container, Content} from 'native-base';
import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import { RootStackParamList } from '../../../../App';
import BasicButton from '../../../UI/Button/BasicButton';
import BasicInput from '../../../UI/Input/BasicInput';
import globalStyles from '../../../../src/assets/styles/index.style';
import styles from './index.style';
import { btnRedStyle } from '../../../UI/Button/BasicButton/index.style';

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
                            <BasicButton style={btnRedStyle} disabled={false} labelButton={'ENTRAR'} onPress={() => navigation.navigate('SignupScreen')} />

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
