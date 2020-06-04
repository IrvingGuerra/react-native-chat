import React from 'react';
import { Icon, Input, Item } from 'native-base';
import PropTypes from 'prop-types';
import { inputDisabledStyle, inputWhiteStyle } from './index.style';

interface BasicInputProps {
    placeholder?: string;
    value?: string;
    onChangeText?: (value: string) => void;
    iconLeft?: string;
    fnIconLeft?: () => void;
    iconRight?: string;
    fnIconRight?: () => void;
    disabled?: boolean;
    security?: boolean;
    keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad';
    style?: any;
}

const BasicInput: React.FunctionComponent<BasicInputProps> = props => {
    const {
        placeholder,
        value,
        onChangeText,
        iconLeft,
        fnIconLeft,
        iconRight,
        fnIconRight,
        disabled,
        security,
        keyboardType,
        style
    } = props;
    return (
        <Item style={disabled ? inputDisabledStyle.item : style.item}>
            {iconLeft && (
                <Icon
                    style={disabled ? inputDisabledStyle.icon : style.icon}
                    onPress={fnIconLeft}
                    active
                    type="FontAwesome"
                    name={iconLeft}
                />
            )}
            <Input
                style={disabled ? inputDisabledStyle.input : style.input}
                placeholder={placeholder}
                placeholderTextColor={'rgba(255,255,255,0.4)'}
                value={value}
                onChangeText={onChangeText}
                disabled={disabled}
                secureTextEntry={security}
                keyboardType={keyboardType}
            />
            {iconRight && (
                <Icon
                    style={disabled ? inputDisabledStyle.icon : style.icon}
                    onPress={fnIconRight}
                    active
                    type="FontAwesome"
                    name={iconRight}
                />
            )}
        </Item>
    );
};

BasicInput.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChangeText: PropTypes.func,
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string,
    fnIconLeft: PropTypes.func,
    fnIconRight: PropTypes.func,
    disabled: PropTypes.bool,
    security: PropTypes.bool,
    keyboardType: PropTypes.any,
    style: PropTypes.any
};

BasicInput.defaultProps = {
    placeholder: 'placeholder',
    value: '',
    onChangeText: value => {},
    iconLeft: undefined,
    iconRight: undefined,
    fnIconLeft: () => {},
    fnIconRight: () => {},
    disabled: false,
    security: false,
    keyboardType: 'default',
    style: inputWhiteStyle
};

export default BasicInput;
