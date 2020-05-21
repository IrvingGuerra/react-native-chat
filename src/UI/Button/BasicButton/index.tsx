import React from 'react';
import { Button } from 'native-base';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { btnDisabledStyle, btnGrayStyle } from './index.style';

interface LargeButtonProps {
    labelButton: string;
    onPress: () => void;
    disabled?: boolean;
    style?: any;
}

const LargeButton: React.FunctionComponent<LargeButtonProps> = props => {
    const { disabled, onPress, labelButton, style } = props;

    return (
        <Button
            disabled={disabled}
            block
            style={disabled ? btnDisabledStyle.backgroundColor : style.backgroundColor}
            onPress={onPress}
        >
            <Text style={disabled ? btnDisabledStyle.fontColor : style.fontColor}>{labelButton}</Text>
        </Button>
    );
};

LargeButton.propTypes = {
    labelButton: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    style: PropTypes.any
};

LargeButton.defaultProps = {
    labelButton: 'Button',
    onPress: void 0,
    disabled: false,
    style: btnGrayStyle
};

export default LargeButton;
