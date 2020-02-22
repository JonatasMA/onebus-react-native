import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import LineFlatList from '../component/LineFlatList'
import DataBase from '../services/database';
import Env from '../enviroments';

function Main({ navigation }) {
    const [lines] = useState(DataBase.lines);
    const [routes, setRoutes] = useState([]);

    function parseToList() {
        return lines.map((line, index) => (
            { key: line.route, id: index, neighborhoods: line.neighborhoods }
        ));
    }

    useEffect(() => {
        setRoutes(
            parseToList()
        );
    }, []);

    function filter(value) {
        let routesFiltered = routes.filter((route) => (
            route.neighborhoods.indexOf(value) > -1
        ));


        if (routesFiltered.length === 0 || value === '') {
            setRoutes(
                parseToList()
            );
        } else {
            setRoutes(routesFiltered);
        }
    }

    navigation.setOptions(
        {
            headerRight: () => (
                <TextInput
                    style={{ color: Env.basic.text, paddingRight: 16 }}
                    placeholder="Procurar"
                    onChangeText={filter}
                />
            )
        }
    );

    return (
        <View>
            <LineFlatList
                navigation={navigation}
                data={routes}
            />
        </View>
    );
}

export default Main;