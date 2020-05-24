import React from 'react';
import { ScrollView, View } from 'react-native';
import { Body, Container, Left, List, ListItem, Right, Thumbnail, Text } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootStackParamList } from '../../../../App';
import { FontAwesome } from '@expo/vector-icons';
import styles from './index.style';
import BasicHeader from '../../../UI/Header/BasicHeader';

const profilePic = require('../../../assets/profilePic.jpg');

type FriendsScreenNavigationProps = DrawerNavigationProp<RootStackParamList, 'PlayersScreen'>;

interface FriendsScreenProps {
    navigation: FriendsScreenNavigationProps;
}

const PlayersScreen: React.FunctionComponent<FriendsScreenProps> = props => {
    const { navigation } = props;

    return (
        <Container>
            <BasicHeader onPress={() => navigation.openDrawer()} titleHeader={'Amigos'} icon={'menu'} />
            <View style={styles.body}>
                <View style={styles.mainBody}>
                    <ScrollView style={styles.scrollView}>
                        <List>
                            <ListItem thumbnail onPress={() => navigation.navigate('ChatScreen')}>
                                <Left>
                                    <Thumbnail small source={profilePic} />
                                </Left>
                                <Body>
                                    <Text>Irving Guerra</Text>
                                    <Text note>Mensaje antiguio... . .</Text>
                                </Body>
                                <Right>
                                    <Text note>3:43 pm</Text>
                                </Right>
                            </ListItem>
                            <ListItem thumbnail>
                                <Left>
                                    <Thumbnail small source={profilePic} />
                                </Left>
                                <Body>
                                    <Text>Iván Cabrera</Text>
                                </Body>
                            </ListItem>
                            <ListItem thumbnail>
                                <Left>
                                    <Thumbnail small source={profilePic} />
                                </Left>
                                <Body>
                                    <Text>Erick Cabrera</Text>
                                </Body>
                            </ListItem>
                            <ListItem thumbnail>
                                <Left>
                                    <Thumbnail small source={profilePic} />
                                </Left>
                                <Body>
                                    <Text>Guillermo Martínez</Text>
                                </Body>
                            </ListItem>
                        </List>
                    </ScrollView>
                </View>
            </View>
        </Container>
    );
};

export default PlayersScreen;
