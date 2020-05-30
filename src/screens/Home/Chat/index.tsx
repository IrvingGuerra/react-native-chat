import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import { Body, Container, Left, List, ListItem, Right, Thumbnail, Text } from 'native-base';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootStackParamList } from '../../../../App';
import styles from './index.style';
import BasicHeader from '../../../UI/Header/BasicHeader';
import BasicInput from "../../../UI/Input/BasicInput";
import {RouteProp} from "@react-navigation/native";
const profilePic = require('../../../assets/profilePic.jpg');
import {Recieve, Send} from '../../../UI/Chat/Bubbles';
import Meteor, { createContainer, withTracker } from 'react-native-meteor';
import _ from "lodash";
import { inputBlackStyle } from '../../../UI/Input/BasicInput/index.style';


type ChatScreenNavigationProps = DrawerNavigationProp<RootStackParamList, 'ChatScreen'>;
type ChatScreenRouteProp = RouteProp<RootStackParamList, 'ChatScreen'>;

interface ChatData {
    msn: string;
}

interface ChatScreenProps {
    navigation: ChatScreenNavigationProps;
    route: ChatScreenRouteProp;
    listReady: boolean;
    messages: Object;
}

const ChatScreen: React.FunctionComponent<ChatScreenProps> = props => {
    const { route, navigation, listReady, messages } = props;
    const { userA, userB } = route.params;
    const actualID = JSON.parse(userA)._id;

    const [chat, setChat] = useState<ChatData>({
        msn: '',
    });

    const currentLocalDate = () => {
        const date = new Date();
        const offsetMs = date.getTimezoneOffset() * 60 * 1000;
        const msLocal = date.getTime() - offsetMs;
        const dateLocal = new Date(msLocal);
        return dateLocal;
    };

    const sendMessage = () => {
        if(chat.msn != ''){
            console.log("Enviando mensaje")
            const json = {
                idSender: JSON.parse(userA)._id,
                idReceiver: JSON.parse(userB)._id,
                text: chat.msn,
                date: currentLocalDate().toISOString(),
                read: false,
            };
            console.log(json);
            Meteor.call('saveMessage', json, (err, res) => {
                if(err){
                    console.log("Error: ", err)
                }else{
                    console.log(res)
                    setChat({msn: ''});
                }
            });
        }
    };

    return (
        <Container>
            <BasicHeader onPress={() => navigation.goBack()} titleHeader={'Chat'} icon={'arrow-back'} />
            <View style={styles.body}>
                    <List style={styles.header}>
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

                    <View style={styles.chat}>
                        {_.map(messages, (message, key) => {
                            if(message.idSender === actualID){
                                return(
                                    <Send key={key} text={message.text}/>
                                )
                            }else{
                                return(
                                    <Recieve key={key} text={message.text}/>
                                )
                            }
                        })}
                    </View>

                    <View style={styles.msn}>
                        <BasicInput
                            placeholder={"Escribe tu mensaje"}
                            disabled={false}
                            value={chat.msn}
                            onChangeText={value => setChat({ ...chat, msn: value })}
                            iconLeft={'user'}
                            iconRight={'send'}
                            fnIconRight={sendMessage}
                            style={inputBlackStyle}
                        />
                    </View>
            </View>
        </Container>
    );
};

export default createContainer((props) => {
    const { route } = props;
    const { userA, userB } = route.params;
    const idA = JSON.parse(userA)._id;
    const idB = JSON.parse(userB)._id;
    const handle = Meteor.subscribe('messagesPlayers', idA, idB);
    return {
        listReady: handle.ready(),
        messages: Meteor.collection('messages').find({}, {sort: {date: 1}}),
    };
}, ChatScreen);

