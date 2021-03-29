import React from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import ParsedText from 'react-native-parsed-text';

import Avatar from './Avatar';
import Text from './Typography';
import {COLORS, FONTS} from '../constants';

const Message = ({data}) => {
  const handleNamePress = name => {
    Alert.alert(`Hello ${name}`);
  };

  return (
    <View style={styles.container}>
      <Avatar image={data.avatar} />
      <View style={styles.contentContainer}>
        <Text.SemiBold style={styles.name}>
          {data.name.first} {data.name.last}
        </Text.SemiBold>

        <ParsedText
          style={styles.text}
          parse={[
            {
              pattern: /@(\w+)/,
              style: styles.username,
              onPress: handleNamePress,
            },
          ]}
          childrenProps={{allowFontScaling: false}}>
          {data.text}
        </ParsedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: '100%',
    height: 40,
    color: '#ffffff',
  },
  contentContainer: {
    marginLeft: 13,
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
  name: {
    color: COLORS.grey,
    fontSize: 12,
  },
  text: {
    color: COLORS.light,
    fontSize: 15,
    fontFamily: FONTS.regular,
  },
  username: {
    color: COLORS.buttonText,
    fontFamily: FONTS.semiBold,
  },
});

export default Message;
