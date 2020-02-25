import React, { useEffect, useState } from 'react';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import DataBase from '../store/database';
import Env from '../enviroments';
import SwipeableFav from '../component/SwipeableFav';

function Main({ navigation }) {
    const routes = useSelector(state => state.routes);
    const mainRoutes = useSelector(state => state.mainRoutes);
    const dispatch = useDispatch();
    const [lines] = useState(DataBase.lines);

    dispatch({ type: 'SET_NAVIGATION', navigation });

    function setMinutesInterval() {
        const minutesInterval = setInterval(
            () => {
                dispatch( {type: 'SET_MINUTES', minutes: (new Date()).getMinutes() });
                clearInterval(minutesInterval)
                setMinutesInterval();
            }, ( (60 - (new Date()).getSeconds()) * 1000)
        );
    }
    setMinutesInterval();

    function parseToList() {
        return lines.map((line, index) => (
            { key: line.route, id: index, neighborhoods: line.neighborhoods, fav: false }
        ));
    }

    async function checkAsyncStorage() {
        var routesStorage = await AsyncStorage.getItem('routes');
        if (!!routesStorage) {
            dispatchRoutes(JSON.parse(routesStorage));
        } else {
            routesStorage = parseToList();
            dispatchRoutes(routesStorage);
        }
    }

    function dispatchRoutes(updatedRoutes) {
        dispatch({ type: 'UPDATE_MAIN_ROUTES', mainRoutes: updatedRoutes });
        dispatch({ type: 'UPDATE_ROUTES', routes: updatedRoutes });
    }

    useEffect(() => {
        checkAsyncStorage();
    }, []);

    function filter(value) {
        let routesFiltered = routes;
        routesFiltered = routesFiltered.filter((route) => {
            for (const key in route.neighborhoods) {
                if (route.neighborhoods.hasOwnProperty(key)) {
                    if (route.neighborhoods[key].indexOf(value) > -1) {
                        return true;
                    }
                }
            }
            return false;
        });

        if (routesFiltered.length === 0 || value === '') {
            dispatchRoutes(
                mainRoutes
            );
        } else {
            dispatch({ type: 'UPDATE_ROUTES', routes: routesFiltered });
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
                    <SwipeableFav
                        id={item.id}
                        value={item.key}
                        favorite={item.fav}
                    />
                )
            }
        />
    );
}

export default Main;