import React from 'react';
import { Body, Button, Header, Icon, Left, Right } from 'native-base';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './index.style';

interface BasicHeaderProps {
    icon: string;
    onPress: () => void;
    titleHeader: string;
}

const BasicHeader: React.FunctionComponent<BasicHeaderProps> = props => {
    const { icon, onPress, titleHeader } = props;
    return (
        <Header style={styles.headerBlack}>
            <Left style={styles.headerLeft}>
                <Button transparent onPress={onPress}>
                    <Icon name={icon} style={styles.iconHeader} />
                </Button>
            </Left>
            <Body style={styles.headerCenter}>
                <Text style={styles.headerTitle}>{titleHeader}</Text>
            </Body>
            <Right style={styles.headerRight} />
        </Header>
    );
};

BasicHeader.propTypes = {
    icon: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    titleHeader: PropTypes.string.isRequired
};

export default BasicHeader;
