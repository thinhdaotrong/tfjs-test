/*************************
 * Copyright (c) 2020-present, Inc. All Rights Reserved
 * See LICENSE.txt for license information.
 *************************/

import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Home from '../screens/home';
import RealtimeCamera from '../screens/realtime_camera';

const Screens = createStackNavigator(
  {
    Home: {
      screen: Home,
    },

    RealtimeCamera: {
      screen: RealtimeCamera,
    },
  },
  {
    mode: 'card',
    headerMode: 'none',
    header: null,

    // cardShadowEnabled: true,
  },
);

const AppMain = createDrawerNavigator({
  Screens,
});

export default AppMain;
