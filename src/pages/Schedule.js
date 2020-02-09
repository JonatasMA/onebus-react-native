import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ScheduleFlatList from '../component/ScheduleFlatList'

function Schedule({ navigation }) {
    const schedule = navigation.getParam('lines');

    return (
        <View>
            <Text style={styles.route}>{schedule.route}</Text>
            <ScheduleFlatList
                data={schedule}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    route: {
        margin: 10,
        fontSize: 20,
        alignContent: 'center',
        textAlign: 'center'
    }
});

export default Schedule;