import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

import {COLORS} from '../../constants';
import {ID} from '../../helpers';
import Text from '../Typography';

const AddOptions = ({onUpdate}) => {
  const [options, setOptions] = useState({});

  useEffect(() => {
    onUpdate(options);
  }, [options]);

  const removeOption = key => {
    setOptions(prevData => {
      const newData = {...prevData};
      delete newData[key];
      return newData;
    });
  };

  const offFocus = key => {
    // If option is empty on blur, then remove the option
    if (options[key].length === 0) {
      removeOption(key);
    }
  };

  return (
    <>
      {Object.keys(options).map(key => (
        <View key={key} style={styles.addOptionBtn}>
          <TextInput
            placeholderTextColor={COLORS.placeholder}
            value={options[key]}
            autoFocus={true}
            onChangeText={val => setOptions({...options, [key]: val})}
            style={styles.optionTxt}
            onBlur={() => offFocus(key)}
          />
          <TouchableOpacity
            style={styles.removeOption}
            onPress={() => removeOption(key)}>
            <FontAwesomeIcon icon={faTimes} size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      ))}
      {Object.keys(options).length <= 7 ? (
        <TouchableOpacity
          style={styles.addOptionBtn}
          onPress={() =>
            setOptions({...options, [ID(Object.keys(options))]: ''})
          }>
          <Text.Regular style={styles.addOptionTxt}>Add an option</Text.Regular>
        </TouchableOpacity>
      ) : null}
    </>
  );
};
const styles = StyleSheet.create({
  addOptionBtn: {
    backgroundColor: COLORS.pollInput,
    borderRadius: 10,
    marginTop: 7,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  addOptionTxt: {
    color: COLORS.buttonText,
    fontSize: 15,
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  optionTxt: {
    color: COLORS.light,
    fontSize: 15,
    flex: 1,
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 14,
  },
  moreOptionText: {
    fontSize: 14,
    color: COLORS.light,
    flex: 1,
    marginLeft: 12,
  },
  removeOption: {
    backgroundColor: COLORS.closeButton,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddOptions;
