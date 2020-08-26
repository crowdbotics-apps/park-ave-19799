import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps94509Navigator from '../features/Maps94509/navigator';
import Add-Item94508Navigator from '../features/Add-Item94508/navigator';
import Maps94504Navigator from '../features/Maps94504/navigator';
import UserProfile94500Navigator from '../features/UserProfile94500/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps94509: { screen: Maps94509Navigator },
Add-Item94508: { screen: Add-Item94508Navigator },
Maps94504: { screen: Maps94504Navigator },
UserProfile94500: { screen: UserProfile94500Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
