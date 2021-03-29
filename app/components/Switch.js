import React from 'react';
import {Switch as NativeSwitch} from 'react-native-switch';

import {COLORS} from '../constants';

const Switch = ({onValueChange, value}) => {
  return (
    <NativeSwitch
      onValueChange={onValueChange}
      value={value}
      disabled={false}
      circleSize={25}
      barHeight={29}
      circleBorderWidth={0}
      backgroundActive={COLORS.buttonText}
      backgroundInactive={COLORS.background}
      circleActiveColor={'#fff'}
      circleInActiveColor={COLORS.grey}
      containerStyle={{
        borderColor: value ? COLORS.buttonText : COLORS.grey,
        borderWidth: 1,
      }}
      switchWidthMultiplier={2.1}
      changeValueImmediately={true}
      renderActiveText={false}
      renderInActiveText={false}
    />
  );
};

export default Switch;
