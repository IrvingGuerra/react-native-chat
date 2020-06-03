import DateTimePicker from '@react-native-community/datetimepicker';
import { Icon, Input, Item } from 'native-base';
import PropTypes from 'prop-types';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Modal, Platform, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    datePickerIOS: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 50
    },
    iconDefault: {
        color: 'rgba(0,0,0,1)'
    },
    inputDefault: {
        color: 'rgba(0,0,0,1)'
    },
    itemDefault: {
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 10,
        marginBottom: 5,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 5,
        paddingLeft: 10,
        paddingRight: 10
    }
});

const getFormattedDate = (date: Date) => {
    const year = date.getFullYear();
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return month + '/' + day + '/' + year;
};

interface BasicDatePickerProps {
    value: Date;
    onChangeDate: (value: Date) => void;
}

const BasicDatePicker: React.FunctionComponent<BasicDatePickerProps> = props => {
    const { value, onChangeDate } = props;

    const [datePicker, setDatePicker] = useState({
        date: value,
        show: false
    });

    const onChange = (event: SyntheticEvent<Readonly<{ timestamp: number; }>, Event>, selectedDate: Date | undefined) => {
        const currentDate = selectedDate || datePicker.date;
        setDatePicker({
            ...datePicker,
            date: currentDate,
            show: !datePicker.show
        });
    };

    const showCalendar = () => {
        setDatePicker({
            ...datePicker,
            show: !datePicker.show
        });
    };

    useEffect(() => {
        onChangeDate(datePicker.date);
    }, [datePicker.date]);

    return (
        <View>
            <Item rounded style={styles.itemDefault}>
                <Input style={styles.inputDefault} value={getFormattedDate(datePicker.date)} disabled={true} />
                <Icon style={styles.iconDefault} onPress={showCalendar} active type="FontAwesome" name="calendar" />
            </Item>

            {datePicker.show && Platform.OS === 'ios' && (
                <Modal>
                    <DateTimePicker
                        style={styles.datePickerIOS}
                        testID="dateTimePicker"
                        timeZoneOffsetInMinutes={0}
                        value={datePicker.date}
                        is24Hour={true}
                        display="default"
                        onChange={(e,date) => onChange(e,date)}
                    />
                </Modal>
            )}
            {datePicker.show && Platform.OS === 'android' &&(
                <DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={0}
                    value={datePicker.date}
                    is24Hour={true}
                    display="default"
                    onChange={(e,date) => onChange(e,date)}
                />
            )}
        </View>
    );
};

BasicDatePicker.propTypes = {
    onChangeDate: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired,
};

export default BasicDatePicker;
