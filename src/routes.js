import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Schedule from './pages/Schedule';
import Env from './enviroments';

function Routes() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Main"
                headerMode="screen"
                screenOptions={{
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: Env.primary.base
                    },
                }}
            >
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{ title: 'OneBus' }}
                />
                <Stack.Screen
                    name="Schedule"
                    component={Schedule}
                    options={{ title: 'OneBus' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;