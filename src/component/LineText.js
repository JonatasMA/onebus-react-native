import React, { Component, useState, useEffect } from 'react';
import { Text, StyleSheet, TouchableHighlight, View, Animated } from 'react-native';
import { Swipeable, RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import DataBase from '../services/database';
import Env from '../enviroments';
import { MaterialIcons } from '@expo/vector-icons';

function LineText() {
    const [props] = useState(arguments[0]);
    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState(0);
    const [fav, setFav] = useState(props.fav);

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
                return hour.replace('*', '').replace('#', '');
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

        const minutesInterval = setInterval(() => { setMinutes((new Date()).getMinutes()) }, 10000);

        return () => { clearInterval(minutesInterval); }
    }, [minutes])


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
            height: 72,
            backgroundColor: '#fff'
        },
        box: {
            margin: 16,
        },
        rightAction: {
            backgroundColor: Env.primary.light,
            justifyContent: 'center',
            alignItems: 'flex-end',
            height: 72,
        },
        actionText: {
            color: '#fff',
            fontWeight: '600',
            fontSize: 16,
            padding: 16
        },
        elevation: {
            elevation: 1
        }
    });

    const RightActions = ({ progress, dragX, onPress }) => {
        const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.rightAction}>
                    <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
                        Favoritar
                    </Animated.Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <Swipeable
            close={()=>console.log('teste')}
            renderRightActions={(progress, dragX) => (
                <RightActions progress={progress} dragX={dragX} onPress={() => { setFav(!fav);}}/>)}
        >
            <TouchableHighlight
                underlayColor='#ddd'
                style={styles.button}
                onPress={
                    () => {
                        props.navigation.navigate('Schedule', { schedule: DataBase.lines[props.id] })
                    }
                }
            >
                <>
                    <View style={styles.box}>
                        <Text style={styles.line}>
                            {props.value}
                        </Text>
                        <Text style={styles.hour}>
                            {hours}
                        </Text>
                    </View>
                    { fav ? <MaterialIcons style={{position: 'absolute', right: 16, top: 24, bottom: 24}} name="favorite" size={24} color={Env.primary.light} /> : null }
                </>
            </TouchableHighlight>
        </Swipeable >
    );
}

export default LineText;