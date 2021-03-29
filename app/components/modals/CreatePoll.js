import React, {useState} from 'react';
import {
  StyleSheet,
  Modal,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUserSecret, faBars} from '@fortawesome/free-solid-svg-icons';

import {COLORS} from '../../constants';
import Text from '../Typography';

import Switch from '../Switch';
import AddOptions from '../Poll/AddOptions';
import PollHeader from '../Poll/PollHeader';

const CreatePoll = ({visible, onClose, onSubmit}) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState({});
  const [anonymous, setAnonymous] = useState(false);
  const [moreOptions, setMoreOptions] = useState(false);

  const Title = ({title, count}) => (
    <View style={styles.itemRow}>
      <Text.Medium style={styles.item}>{title}</Text.Medium>
      <Text.Medium style={styles.count}>{count}</Text.Medium>
    </View>
  );

  return (
    <Modal
      animationType="slide"
      visible={visible}
      presentationStyle="formSheet">
      <PollHeader
        onClose={onClose}
        onSubmit={() => onSubmit({options, question, date: new Date()})}
        data={{options, question}}
      />
      <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView behavior={'position'} style={{flex: 1}}>
          <Title title="Question" count={`${question?.length}/140`} />
          <TextInput
            placeholderTextColor={COLORS.placeholder}
            value={question}
            multiline
            maxLength={140}
            onChangeText={val => setQuestion(val)}
            placeholder="Ask a question"
            style={styles.input}
          />
          <Title title="Options" count={`${Object.keys(options).length}/8`} />
          <AddOptions onUpdate={data => setOptions(data)} />
          <View style={{marginTop: 30}}>
            <View style={styles.row}>
              <FontAwesomeIcon icon={faUserSecret} size={20} color="#fff" />
              <Text.Medium style={styles.moreOptionText}>
                Anonymous voting
              </Text.Medium>
              <Switch onValueChange={setAnonymous} value={anonymous} />
            </View>
            <View style={styles.row}>
              <FontAwesomeIcon icon={faBars} size={20} color="#fff" />
              <Text.Medium style={styles.moreOptionText}>
                Ability to add more options
              </Text.Medium>
              <Switch onValueChange={setMoreOptions} value={moreOptions} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    paddingHorizontal: 20,
  },
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
    color: COLORS.buttonText,
    fontSize: 14,
  },
  itemRow: {
    flexDirection: 'row',
    marginTop: 15,
  },
  item: {
    flex: 1,
    fontSize: 12,
    color: COLORS.grey,
  },
  count: {
    fontSize: 12,
    color: COLORS.grey,
  },
  input: {
    backgroundColor: COLORS.pollInput,
    borderRadius: 10,
    paddingTop: 12,
    paddingBottom: 12,
    color: COLORS.light,
    paddingHorizontal: 14,
    marginTop: 7,
    marginBottom: 10,
    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  moreOptionText: {
    fontSize: 14,
    color: COLORS.light,
    flex: 1,
    marginLeft: 12,
  },
});

export default CreatePoll;
