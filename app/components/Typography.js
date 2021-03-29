import {Text} from 'react-native';
import React from 'react';

import {FONTS} from '../constants';

export const Regular = props => {
  return (
    <Text
      {...props}
      style={[{fontFamily: FONTS.regular, fontSize: 16}, props.style]}
    />
  );
};

export const Medium = props => {
  return (
    <Text
      {...props}
      style={[{fontFamily: FONTS.medium, fontSize: 16}, props.style]}
    />
  );
};

export const SemiBold = props => {
  return (
    <Text
      {...props}
      style={[{fontFamily: FONTS.semiBold, fontSize: 16}, props.style]}
    />
  );
};

export default {
  Regular,
  SemiBold,
  Medium,
};
