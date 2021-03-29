import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Avatar from './Avatar';
import Text from './Typography';
import {COLORS} from '../constants';

import {toUpperCase} from '../helpers';

const Poll = ({data}) => {
  return (
    <LinearGradient
      colors={['#A83D7F', '#6F1D7A81', '#4C097734', '#03114398']}
      style={styles.linearGradient}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <View style={{flexDirection: 'row'}}>
        <Avatar image={data.avatar} size={{width: 36, height: 36}} />
        <View style={{flex: 1, marginLeft: 13}}>
          <Text.Regular style={styles.subTitle}>Public Poll</Text.Regular>
          <Text.SemiBold style={styles.name}>
            {data.name.first} {data.name.last}
          </Text.SemiBold>
        </View>
        <View style={styles.voteCountContainer}>
          <Text.SemiBold style={styles.voteCount}>0</Text.SemiBold>
          <Text.Regular style={styles.voteCountTxt}>votes</Text.Regular>
        </View>
      </View>
      <Text.Medium style={styles.question}>{toUpperCase(data.poll.question)}</Text.Medium>
      {Object.keys(data.poll.options).map(key => (
        <TouchableOpacity key={key} style={styles.option}>
          <Text.Regular style={styles.optionTxt}>
            {data.poll.options[key]}
          </Text.Regular>
        </TouchableOpacity>
      ))}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    paddingTop: 80,
  },
  linearGradient: {
    padding: 20,
    flex: 1,
    borderRadius: 18,
    marginBottom: 15,
  },
  voteCountContainer: {
    backgroundColor: COLORS.pink,
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  voteCount: {
    fontSize: 16,
    color: COLORS.light,
  },
  voteCountTxt: {
    fontSize: 10,
    color: COLORS.light,
  },
  subTitle: {
    fontSize: 10,
    color: COLORS.light,
  },
  name: {
    fontSize: 12,
    color: COLORS.light,
  },
  question: {
    fontSize: 15,
    color: COLORS.light,
    marginTop: 10,
  },
  option: {
    backgroundColor: 'rgba(28, 110, 242, 0.15)',
    borderRadius: 15,
    marginTop: 10,
    padding: 15,
  },
  optionTxt: {
    fontSize: 12,
    color: COLORS.light,
  },
});

export default Poll;
