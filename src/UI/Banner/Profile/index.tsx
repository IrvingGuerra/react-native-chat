import React from 'react';
import { View, Icon } from 'native-base';
import { Image, Text } from 'react-native';
import styles from './index.style';

const profilePic = require('../../../assets/profilePic.jpg');

interface BannerProfileProps {
    userName: string;
    stars: string;
    rankClass: string;
}

const BannerProfile: React.FunctionComponent<BannerProfileProps> = props => {
    const { userName, stars, rankClass } = props;
    return (
        <View style={styles.banner}>
            <View style={styles.bannerPhoto}>
                <Image style={styles.photo} source={profilePic} />
            </View>
            <View style={styles.bannerInfo}>
                <Text style={styles.bannerText}>{userName}</Text>
                <Text style={styles.bannerText}>
                    {stars} <Icon name="star" style={styles.star} />
                </Text>
                <Text style={styles.bannerText}>{rankClass}</Text>
            </View>
        </View>
    );
};

export default BannerProfile;
