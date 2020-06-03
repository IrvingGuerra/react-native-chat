import { StackNavigationProp } from '@react-navigation/stack';
import {Container, Content} from 'native-base';
import React, { useState } from 'react';
import {Image, ImageBackground, ScrollView, Text, View, Alert} from 'react-native';
import { RootStackParamList } from '../../../../App';
import BasicButton from '../../../UI/Button/BasicButton';
import BasicDatePicker from '../../../UI/Input/BasicDatePicker';
import BasicInput from '../../../UI/Input/BasicInput';
import globalStyles from '../../../../src/assets/styles/index.style';
import { btnRedStyle } from '../../../UI/Button/BasicButton/index.style';
import { SERVER, PORT, API_HEADERS } from "../../../constants";
import RadioForm from 'react-native-simple-radio-button';
import styles from './index.style';

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
    birthday: Date;
    phone: {
        lada: string;
        number: string;
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
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        gender: 'M',
        birthday: new Date(),
        phone: {
            lada: '+52',
            number: '',
        },
        password: ''

    });

    const switchPasswordHidden = () => {
        const { hidePassword } = formData;
        setFormData({
            hidePassword: !hidePassword,
            passwordIconName: hidePassword ? 'eye-slash' : 'eye'
        });
    };

    const registerPlayer = async () => {
        if(userData.firstName!=''
            && userData.lastName!=''
            && userData.username!=''
            && userData.email!=''
            && userData.phone.lada!=''
            && userData.phone.number!=''
            && userData.password!=''){
            let response = await fetch('http://'+SERVER+':'+PORT+'/api/player/register', {
                method: 'POST',
                headers: API_HEADERS,
                body: JSON.stringify(userData)
            });
            let data = await response.json();
            if(data.statusCode === 201){
                Alert.alert("Register", data.body.message);
            }else{
                // Error
                Alert.alert("Error", data.body.message);
            }
        }else{
            Alert.alert("Error", "Please verify that the fields are not empty.");
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

                            <Text style={[globalStyles.text, globalStyles.textAlignLeft]}>
                                {'Gender'}
                            </Text>

                            <RadioForm
                                radio_props={[
                                    { label: 'Male', value: 'M' },
                                    { label: 'Female', value: 'F' }
                                ]}
                                initial={ userData.gender === 'M' && 0 }
                                labelColor={'rgba(255,255,255,0.4)'}
                                buttonColor={'rgba(255,255,255,0.4)'}
                                selectedLabelColor={'white'}
                                selectedButtonColor={'white'}
                                formHorizontal={true}
                                labelHorizontal={true}
                                animation={true}
                                onPress={(value: string) => setUserData({ ...userData, gender: value })}
                                style={styles.radioButton}
                                labelStyle={styles.labelRadio}
                            />

                            <Text style={[globalStyles.text, globalStyles.textAlignLeft]}>
                                {'Birthday'}
                            </Text>

                            <BasicDatePicker
                                value={userData.birthday}
                                onChangeDate={value => setUserData({ ...userData, birthday: value })}
                            />

                            <BasicInput
                                placeholder={"Lada"}
                                value={userData.phone.lada}
                                onChangeText={value => setUserData({ ...userData, phone: { ...userData.phone, lada: value }})}
                                disabled={false}
                                iconLeft={'phone-square'}
                            />
                            <BasicInput
                                placeholder={"Telefono"}
                                value={userData.phone.number}
                                onChangeText={value => setUserData({ ...userData, phone: { ...userData.phone, number: value }})}
                                disabled={false}
                                iconLeft={'phone'}
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
