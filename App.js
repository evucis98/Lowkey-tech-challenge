/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment} from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {ActionSheetProvider} from 'react-native-awesome-action-sheet';

import MainApp from './app/index';

import {COLORS} from './app/constants';

const App: () => Node = () => {
  return (
    <ActionSheetProvider>
      <Fragment>
        <SafeAreaView style={styles.topArea} />
        <SafeAreaView style={styles.bottomArea}>
          <StatusBar barStyle={'light-content'} />
          <MainApp />
        </SafeAreaView>
      </Fragment>
    </ActionSheetProvider>
  );
};

const styles = StyleSheet.create({
  topArea: {
    backgroundColor: COLORS.headerBackground,
  },
  bottomArea: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
});

export default App;
