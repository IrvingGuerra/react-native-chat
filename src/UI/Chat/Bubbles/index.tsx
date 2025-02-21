import React from 'react';
import { View, } from 'native-base';
import { Text } from 'react-native';
import styles from './index.style';
import Svg, {Path} from "react-native-svg";
import {moderateScale} from "react-native-size-matters";

interface BubbleProps {
    text: string;
}

export const BubbleReceived: React.FunctionComponent<BubbleProps> = props => {
    const { text } = props;
    return (
        <View style={[styles.item, styles.itemIn]}>
            <View style={[styles.balloon, {backgroundColor: 'grey'}]}>
                <Text style={styles.text}>{ text }</Text>
                <View
                    style={[
                        styles.arrowContainer,
                        styles.arrowLeftContainer,
                    ]}
                >
                    <Svg style={styles.arrowLeft} width={moderateScale(15.5, 0.6)} height={moderateScale(17.5, 0.6)} viewBox="32.484 17.5 15.515 17.5"  enable-background="new 32.485 17.5 15.515 17.5">
                        <Path
                            d="M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z"
                            fill="grey"
                            x="0"
                            y="0"
                        />
                    </Svg>
                </View>
            </View>
        </View>
    );
};

export const BubbleSent: React.FunctionComponent<BubbleProps> = props => {
    const { text } = props;
    return (
        <View style={[styles.item, styles.itemOut]}>
            <View style={[styles.balloon, {backgroundColor: '#1084ff'}]}>
                <Text style={styles.text}>{ text }</Text>
                <View
                    style={[
                        styles.arrowContainer,
                        styles.arrowRightContainer,
                    ]}
                >
                    <Svg style={styles.arrowRight} width={moderateScale(15.5, 0.6)} height={moderateScale(17.5, 0.6)} viewBox="32.485 17.5 15.515 17.5"  enable-background="new 32.485 17.5 15.515 17.5">
                        <Path
                            d="M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z"
                            fill="#1084ff"
                            x="0"
                            y="0"
                        />
                    </Svg>
                </View>
            </View>
        </View>
    );
};
