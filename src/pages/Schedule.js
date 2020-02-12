import React from 'react';
import { View, ToastAndroid, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import ScheduleFlatList from '../component/ScheduleFlatList'
import TitleRoute from '../component/TitleRoute'
import { TouchableOpacity } from 'react-native-gesture-handler';

function Schedule({ route, navigation }) {
    const { schedule } = route.params;

    if (schedule.descriptions) {
        function showAlert() {
            Alert.alert(
                'Legendas',
                schedule.descriptions.join("\n\n"),
                [
                    { text: 'OK' },
                ],
                { cancelable: false }
            );

        }

        navigation.setOptions(
            {
                headerRight: () => (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={showAlert}>
                        <MaterialIcons name="help-outline" size={25} color="#FFF" />
                    </TouchableOpacity>
                )
            }
        );

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
            />
            <ScheduleFlatList
                data={schedule}
            />
        </View>
    );
}

export default Schedule;