import React, {useEffect, useState} from 'react';
import {Alert, ScrollView, View} from 'react-native';
import {Body, Container, Left, List, ListItem, Right, Thumbnail, Text, Icon} from 'native-base';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootStackParamList, SELECTED_SERVER } from '../../../../App';
import styles from './index.style';
import BasicHeader from '../../../UI/Header/BasicHeader';
import _ from 'lodash';

const profilePic = require('../../../assets/profilePic.jpg');

type FriendsScreenNavigationProps = DrawerNavigationProp<RootStackParamList, 'PlayersScreen'>;

interface FriendsScreenProps {
    navigation: FriendsScreenNavigationProps;
}

const PlayersScreen: React.FunctionComponent<FriendsScreenProps> = props => {
    const { navigation } = props;

    const [players, setPlayers] = useState([]);


    useEffect(() => {
        const getPlayers = async () => {
            let response = await fetch('http://'+SELECTED_SERVER+'/api/player/getPlayers', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache'
                }
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
                        {_.map(players, (player) => {
                            if(player.status.online){
                                return(
                                    <ListItem thumbnail onPress={() => navigation.navigate('ChatScreen')}>
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
                                    <ListItem thumbnail onPress={() => navigation.navigate('ChatScreen')}>
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
