import React from 'react';
import { View, ToastAndroid } from 'react-native';

import ScheduleFlatList from '../component/ScheduleFlatList'
import TitleRoute from '../component/TitleRoute'

function Schedule({ navigation }) {
    const schedule = navigation.getParam('lines');

    ToastAndroid.showWithGravityAndOffset(
        'Clique no título para abrir as legendas.',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
    );

    return (
        <View>
            <TitleRoute route={schedule.route} descriptions={schedule.descriptions ? schedule.descriptions.join("\n\n") : null} />
            <ScheduleFlatList
                data={schedule}
            />
        </View>
    );
}

export default Schedule;