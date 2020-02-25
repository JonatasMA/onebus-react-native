import { createStore } from 'redux';
import { AsyncStorage } from 'react-native';

const STATE = {
    routes: [],
    mainRoutes: [],
    navigation: {},
    minutes: (new Date()).getMinutes()
}

function reducer(state = STATE, action) {
    switch (action.type) {
        case 'UPDATE_ROUTES':
            return { ...state, routes: action.routes }

        case 'UPDATE_MAIN_ROUTES':
            AsyncStorage.removeItem('routes');
            AsyncStorage.setItem('routes', JSON.stringify(action.mainRoutes));
            return { ...state, mainRoutes: action.mainRoutes };

        case 'SET_NAVIGATION':
            return { ...state, navigation: action.navigation }

        case 'SET_MINUTES':
            return { ...state, minutes: action.minutes }

        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;