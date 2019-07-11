import { createAppContainer, createStackNavigator } from 'react-navigation';
import { defaultNavigationOptions } from './config';
import { ComponentMap } from './routes';

const MainNavigator = createStackNavigator(ComponentMap, { defaultNavigationOptions });
const RootApp = createAppContainer(MainNavigator);

export default RootApp;
