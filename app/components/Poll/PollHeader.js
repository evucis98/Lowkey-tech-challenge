import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

import Text from '../Typography';
import {COLORS} from '../../constants';

const PollHeader = ({onClose, onSubmit, data}) => {
  const canSubmit = () => {
    if (data.question) {
      const options = Object.keys(data.options).filter(
        key => data.options[key].length > 0,
      );
      // Poll has to have at least 2 options
      return options.length >= 2;
    }
    return false;
  };

  return (
    <View style={styles.header}>
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={onClose}>
          <FontAwesomeIcon icon={faTimes} size={28} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={{flex: 2}}>
        <Text.SemiBold style={styles.title}>New Poll</Text.SemiBold>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <TouchableOpacity onPress={onSubmit}>
          <Text.Medium style={[styles.createBtn, {color: canSubmit() ? COLORS.buttonText : COLORS.grey}]}>Create</Text.Medium>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: COLORS.background,
    paddingBottom: 15,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
  },
  createBtn: {
    fontSize: 14,
  },
});

export default PollHeader;
