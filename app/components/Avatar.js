import React, {useState} from 'react';
import {StyleSheet, Image, View} from 'react-native';

const Avatar = ({image, size}) => {
  return (
    <View style={styles.container}>
      <Image
        style={[
          styles.image,
          size ? {height: size.height, width: size.width} : {},
        ]}
        source={{uri: image}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  image: {
    height: 45,
    width: 45,
    borderRadius: 10,
  },
});

export default Avatar;
