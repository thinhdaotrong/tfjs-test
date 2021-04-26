/*************************
 * Copyright (c) 2020-present, Inc. All Rights Reserved
 * See LICENSE.txt for license information.
 *************************/

import React from 'react';
import {AppearanceProvider} from 'react-native-appearance';

import AppNavigator from './navigation';
import NavigationService from './navigation/NavigationService';

export default function Main() {
  return (
    <AppearanceProvider>
      <AppNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </AppearanceProvider>
  );
}
