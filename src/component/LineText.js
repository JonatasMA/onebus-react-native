import React, { Component, useState, useEffect } from 'react';
import { Text, StyleSheet, TouchableHighlight, View } from 'react-native';
import DataBase from '../services/database';

function LineText() {
    const [props] = useState(arguments[0]);
    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
        const getNextSchedule = (schedules) => {
            const now = new Date;

            function parseTime(text) {
                const textSplited = text.split(':');
                const time = new Date;
                time.setHours(textSplited[0]);
                time.setMinutes(textSplited[1]);
                return time;
            }

            function removeChars(hour) {
                return hour.replace('➊', '').replace('➋', '').replace('➌', '');
            }

            for (const key in schedules) {
                if (schedules.hasOwnProperty(key)) {
                    const scheduleText = removeChars(schedules[key]);
                    const schedule = parseTime(scheduleText);
                    if (schedule > now) {
                        return scheduleText;
                    }
                }
            }

            return removeChars(schedules[0]);
        }

        const schedules = DataBase.lines[props.id].schedules[0];
        setHours(
            getNextSchedule(schedules.start.hours) + (schedules.end ? ' / ' + getNextSchedule(schedules.end.hours) : '')
        );
    }, [minutes])

    setInterval(() => { setMinutes((new Date()).getMinutes()) }, 10000)

    const styles = StyleSheet.create({
        line: {
            fontSize: 16,
        },
        hour: {
            fontSize: 14,
            fontStyle: 'italic',
            color: '#888'
        },
        button: {
            height: 64,
        },
        box: {
            margin: 16,
        }
    });

    return (
        <TouchableHighlight
            underlayColor='#ddd'
            style={styles.button}
            onPress={
                () => {
                    props.navigation.navigate('Schedule', { schedule: DataBase.lines[props.id] })
                }
            }
        >
            <View style={styles.box}>
                <Text style={styles.line}>
                    {props.value}
                </Text>
                <Text style={styles.hour}>
                    {hours}
                </Text>
            </View>
        </TouchableHighlight>
    );
}

export default LineText;