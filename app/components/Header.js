import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

import Text from './Typography';
import {COLORS} from '../constants';

import Avatar from './Avatar';

const Header = ({}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faTimes} size={28} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={{flex: 2}}>
        <Text.SemiBold style={styles.title}>Lowkey Squad</Text.SemiBold>
        <Text.Regular style={styles.info}>1 member • 1 online</Text.Regular>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <Avatar image="https://arcticstartup.com/wp-content/uploads/2021/02/pexels-photo-853168.jpeg" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.headerBackground,
    paddingVertical: 5,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
  },
  info: {
    color: COLORS.grey,
    textAlign: 'center',
    fontSize: 12,
  },
});

export default Header;
