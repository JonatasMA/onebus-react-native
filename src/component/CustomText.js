import React, { Component } from 'react';
import { Text, StyleSheet, TouchableHighlight, View } from 'react-native';
import DataBase from '../services/database';
import Env from '../enviroments';

class CustomText extends Component {
    render() {
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

        const getNextSchedule = (schedules) => {
            const now = new Date;
            // const now = (new Date).getTime();
            const parseTime = (text) => {
                const textSplited = text.split(':');
                const time = new Date;
                time.setHours(textSplited[0]);
                time.setMinutes(textSplited[1]);
                return time;
            }

            for (const key in schedules) {
                if (schedules.hasOwnProperty(key)) {
                    const scheduleText = (schedules[key]).replace('➊', '').replace('➋', '').replace('➌', '');
                    const schedule = parseTime(scheduleText);
                    console.log(schedule > now, schedule, now);
                    if (schedule > now) {
                        return scheduleText;
                    }
                }
            }
        }

        const schedules = DataBase.lines[this.props.id].schedules[0];

        return (
            <TouchableHighlight
                underlayColor='#ddd'
                style={styles.button}
                onPress={
                    () => {
                        this.props.navigation.navigate('Schedule', { schedule: DataBase.lines[this.props.id]})
                    }
                }
            >
                <View style={styles.box}>
                    <Text style={styles.line}>
                        {this.props.value}
                    </Text>
                    <Text style={styles.hour}>
                        {'↑ ' + getNextSchedule(schedules.start.hours)}{schedules.end ? ' | ↓ ' + getNextSchedule(schedules.end.hours):''}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
}

export default CustomText;