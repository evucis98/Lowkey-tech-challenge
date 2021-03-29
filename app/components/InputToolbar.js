import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {connectActionSheet} from 'react-native-awesome-action-sheet';

import {COLORS} from '../constants';

const InputToolbar = ({onSend, showActionSheetWithOptions, openPoll}) => {
  const [text, setText] = useState(null);
  const IOS_OFFSET = 44;

  const getVerticalOffset = () =>
    Platform.select({
      ios: IOS_OFFSET,
      android: 0,
    });

  const onOpenActionSheet = () => {
    let options = ['Create poll', 'Cancel'];
    let destructiveButtonIndex = 2;
    let cancelButtonIndex = 1;
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          openPoll();
        }
      },
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={getVerticalOffset()}>
      <View style={styles.container}>
        <View style={{marginRight: 10}}>
          <TouchableOpacity onPress={onOpenActionSheet}>
            <FontAwesomeIcon icon={faPlus} size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <TextInput
          placeholderTextColor={COLORS.placeholder}
          multiline={true}
          value={text}
          onChangeText={val => setText(val)}
          placeholder="Message"
          numberOfLines={5}
          style={styles.input}
        />
        <View style={{marginLeft: 10}}>
          <TouchableOpacity onPress={() => [onSend(text), setText(null)]}>
            <FontAwesomeIcon icon={faPaperPlane} size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: COLORS.background,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: COLORS.input,
    flex: 1,
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    color: COLORS.light,
    paddingHorizontal: 10,
    fontSize: 15,
    maxHeight: Platform.OS === 'android' ? 45 : 'auto'
  },
});

export default connectActionSheet(InputToolbar);
