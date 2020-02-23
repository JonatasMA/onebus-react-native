import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TextInput, FlatList } from 'react-native-gesture-handler';

import LineText from '../component/LineText'
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
        <FlatList
            data={routes}
            renderItem={
                ({ item }) => (
                    <LineText
                        navigation={navigation}
                        id={item.id}
                        value={item.key}
                        fav={false}
                    />
                )
            }
        />
    );
}

export default Main;