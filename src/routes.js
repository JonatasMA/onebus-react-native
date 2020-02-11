import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Schedule from './pages/Schedule';
import Env from './enviroments';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Main: {
                screen: Main,
                navigationOptions: {
                    title: "OneBus"
                }
            },
            Schedule: {
                screen: Schedule,
                navigationOptions: {
                    title: "OneBus"
                }
            },
        },
        {
            defaultNavigationOptions: {
                headerTintColor: '#FFF',
                headerStyle: {
                    backgroundColor: Env.primaryColor
                }
            },
            initialRouteName: 'Main',
        }
    )
);

export default Routes;