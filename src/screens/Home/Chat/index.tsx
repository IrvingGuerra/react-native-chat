import React, {useState} from 'react';
import { ScrollView, View } from 'react-native';
import { Body, Container, Left, List, ListItem, Right, Thumbnail, Text } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootStackParamList } from '../../../../App';
import { FontAwesome } from '@expo/vector-icons';
import styles from './index.style';
import BasicHeader from '../../../UI/Header/BasicHeader';
import BasicInput from "../../../UI/Input/BasicInput";

const profilePic = require('../../../assets/profilePic.jpg');

type FriendsScreenNavigationProps = DrawerNavigationProp<RootStackParamList, 'ChatScreen'>;

interface ChatData {
    message: string;
}

interface FriendsScreenProps {
    navigation: FriendsScreenNavigationProps;
}

const ChatScreen: React.FunctionComponent<FriendsScreenProps> = props => {
    const { navigation } = props;
    const [chat, setChat] = useState<ChatData>({
        message: '',
    });

    return (
        <Container>
            <BasicHeader onPress={() => navigation.goBack()} titleHeader={'Chat'} icon={'arrow-back'} />
            <View style={styles.body}>
                <View style={styles.mainBody}>
                        <List>
                            <ListItem thumbnail>
                                <Left>
                                    <Thumbnail small source={profilePic} />
                                </Left>
                                <Body>
                                    <Text>Irving Guerra</Text>
                                    <Text note>Ultima conexion: 3:20 pm</Text>
                                </Body>
                            </ListItem>
                        </List>
                        <View style={styles.bottom}>
                            <BasicInput
                                placeholder={"Escribe tu mensaje"}
                                disabled={false}
                                value={chat.message}
                                onChangeText={value => setChat({ ...chat, message: value })}
                                iconLeft={'user'}
                                iconRight={'send'}
                            />
                        </View>
                </View>
            </View>
        </Container>
    );
};

export default ChatScreen;
