import React from 'react';
import { Icon, Input, Item } from 'native-base';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    itemDefault: {
        backgroundColor: 'transparent',
        marginTop: 5,
        marginBottom: 5,
        paddingRight: 10,
        paddingLeft: 10,
        borderBottomWidth: 2
    },
    inputDefault: {
        color: 'rgba(255,255,255,1)'
    },
    iconDefault: {
        color: 'rgba(255,255,255,1)',
        fontSize: 20
    },
    itemDisabled: {
        backgroundColor: 'white',
        borderRadius: 12,
        marginTop: 5,
        marginBottom: 5,
        paddingRight: 10,
        paddingLeft: 10
    },
    inputDisabled: {
        color: 'rgba(0,0,0,0.4)'
    },
    iconDisabled: {
        color: 'rgba(0,0,0,0.4)'
    }
});

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
        keyboardType
    } = props;
    return (
        <Item style={disabled ? styles.itemDisabled : styles.itemDefault}>
            {iconLeft && (
                <Icon
                    style={disabled ? styles.iconDisabled : styles.iconDefault}
                    onPress={fnIconLeft}
                    active
                    type="FontAwesome"
                    name={iconLeft}
                />
            )}
            <Input
                style={disabled ? styles.inputDisabled : styles.inputDefault}
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
                    style={disabled ? styles.iconDisabled : styles.iconDefault}
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
    keyboardType: PropTypes.any
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
    keyboardType: 'default'
};

export default BasicInput;
