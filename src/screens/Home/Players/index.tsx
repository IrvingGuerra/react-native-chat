import React, {useEffect, useState} from 'react';
import {Alert, ScrollView, View} from 'react-native';
import {Body, Container, Left, List, ListItem, Right, Thumbnail, Text, Icon} from 'native-base';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootStackParamList } from '../../../../App';
import styles from './index.style';
import BasicHeader from '../../../UI/Header/BasicHeader';
import _ from 'lodash';
import {RouteProp} from "@react-navigation/native";
import { SERVER, PORT, API_HEADERS} from "../../../constants";

const profilePic = require('../../../assets/profilePic.jpg');

type FriendsScreenNavigationProps = DrawerNavigationProp<RootStackParamList, 'PlayersScreen'>;
type FriendsScreenRouteProp = RouteProp<RootStackParamList, 'PlayersScreen'>;

interface FriendsScreenProps {
    navigation: FriendsScreenNavigationProps;
    route: FriendsScreenRouteProp;
}

const PlayersScreen: React.FunctionComponent<FriendsScreenProps> = props => {
    const { route, navigation } = props;
    const { user } = route.params;
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const getPlayers = async () => {
            let response = await fetch('http://'+SERVER+':'+PORT+'/api/player/getPlayers', {
                method: 'GET',
                headers: API_HEADERS
            });
            let data = await response.json();
            if(data.statusCode === 201){
                const users = JSON.parse(data.body.users);
                setPlayers(users);
            }else{
                Alert.alert("Error", data.body.message);
            }

        };
        getPlayers();
    }, []);

    return (
        <Container>
            <BasicHeader onPress={() => navigation.openDrawer()} titleHeader={'Amigos'} icon={'menu'} />
            <View style={styles.body}>
                <ScrollView>
                    <List>
                        {_.map(players, (player: {username, status}, key) => {
                            const playerString = JSON.stringify(player);
                            if(player.status.online){
                                console.log(user);
                                console.log(player);
                                return(
                                    <ListItem key={key} thumbnail
                                              onPress={() => navigation.navigate('ChatScreen',{
                                                  userSender: user,
                                                  userReceiver: playerString
                                              })}>
                                        <Left>
                                            <Thumbnail small source={profilePic} />
                                        </Left>
                                        <Body>
                                            <Text>{player.username}</Text>
                                        </Body>
                                        <Right>
                                            <Icon
                                                style={styles.online}
                                                active
                                                type="FontAwesome"
                                                name={'circle'}
                                            />
                                        </Right>
                                    </ListItem>
                                );
                            }else{
                                return(
                                    <ListItem key={key} thumbnail
                                              onPress={() => navigation.navigate('ChatScreen',{
                                                  userSender: user,
                                                  userReceiver: playerString
                                              })}>
                                        <Left>
                                            <Thumbnail small source={profilePic} />
                                        </Left>
                                        <Body>
                                            <Text>{player.username}</Text>
                                        </Body>
                                        <Right>
                                            <Icon
                                                active
                                                type="FontAwesome"
                                                name={'circle'}
                                            />
                                        </Right>
                                    </ListItem>
                                );
                            }

                        })}
                    </List>
                </ScrollView>
            </View>
        </Container>
    );
};

export default PlayersScreen;
