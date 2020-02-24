import { createStore } from 'redux';
import { AsyncStorage } from 'react-native';

const STATE = {
    routes: [],
    mainRoutes: [],
    navigation: {}
}

function reducer(state = STATE, action) {
    switch (action.type) {
        case 'UPDATE_ROUTES':
            return { ...state, routes: action.routes }
        case 'UPDATE_MAIN_ROUTES':
            const main = { ...state, mainRoutes: action.mainRoutes };
            AsyncStorage.setItem('routes', JSON.stringify(main));
            return main;
        case 'SET_NAVIGATION':
            return { ...state, navigation: action.navigation }
        default :
            return state;
    }
}

const store = createStore(reducer);

export default store;