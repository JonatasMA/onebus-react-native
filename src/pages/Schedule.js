import React from 'react';
import { View, ToastAndroid } from 'react-native';

import ScheduleFlatList from '../component/ScheduleFlatList'
import TitleRoute from '../component/TitleRoute'

function Schedule({ route, navigation }) {
    const { schedule } = route.params;
    // navigation.setOptions({ title: 'Updated!' })

    if (schedule.descriptions) {
        ToastAndroid.showWithGravityAndOffset(
            'Clique no título para abrir as legendas.',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            0,
            25,
        );
    }

    return (
        <View>
            <TitleRoute
                route={schedule.route}
                descriptions={schedule.descriptions ? schedule.descriptions.join("\n\n") : null}
            />
            <ScheduleFlatList
                data={schedule}
            />
        </View>
    );
}

export default Schedule;