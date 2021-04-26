/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

import React, {Fragment} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';

import {RealtimeDemo} from '../../components/webcam/realtime_demo';

const BACKEND_TO_USE = 'rn-webgl';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTfReady: false,
    };

    this.showMainScreen = this.showMainScreen.bind(this);
  }

  async componentDidMount() {
    await tf.setBackend(BACKEND_TO_USE);
    await tf.ready();
    this.setState({
      isTfReady: true,
    });
  }

  showMainScreen() {
    this.props.navigation.navigate('Home');
  }

  renderRealtimeDemo() {
    return (
      <Fragment>
        <RealtimeDemo showMainScreen={this.showMainScreen} />
      </Fragment>
    );
  }

  renderLoadingTF() {
    return (
      <Fragment>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Loading TF</Text>
        </View>
      </Fragment>
    );
  }

  renderContent() {
    const {isTfReady} = this.state;
    if (isTfReady) {
      return this.renderRealtimeDemo();
    } else {
      return this.renderLoadingTF();
    }
  }

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={styles.body}>{this.renderContent()}</View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    marginBottom: 6,
  },
});
