import React, {useRef, useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView, Keyboard} from 'react-native';

import Messages from './data/Messages';

import {COLORS} from './constants';

import Header from './components/Header';
import Message from './components/Message';
import InputToolbar from './components/InputToolbar';
import CreatePoll from './components/modals/CreatePoll';
import Poll from './components/Poll';

const imaginaryUser = {
  guid: '5c59e417-1503-4cef-8347-e2fa11111',
  isActive: true,
  avatar: 'https://placekitten.com/213/213',
  name: {
    first: 'Evita',
    last: 'Urbanovica',
  },
};

const MainApp = ({}) => {
  const scrollViewRef = useRef();
  const [data, setData] = useState(Messages);
  const [createPollVisible, setCreatePollVisible] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      scrollViewRef?.current?.scrollToEnd({animated: true});
    });
  }, []);

  const onSendMessage = text => {
    if (!text) {
      return null;
    }

    const items = {
      ...imaginaryUser,
      date: new Date(),
      text,
    };

    setData(prev => [...prev, items]);
  };

  const setPolls = item => {
    if (!item) {
      return null;
    }

    const items = {
      ...imaginaryUser,
      date: new Date(),
      poll: item,
    };

    setData(prev => [...prev, items]);
    setCreatePollVisible(false)
  };

  const filteredByDate = data.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  return (
    <>
      <Header />
      {createPollVisible ? (
        <CreatePoll
          visible={createPollVisible}
          onClose={() => setCreatePollVisible(false)}
          onSubmit={items => setPolls(items)}
        />
      ) : null}
      <ScrollView
        ref={scrollViewRef}
        style={{flex: 1}}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({animated: true})
        }>
        <View style={styles.container}>
          {filteredByDate.map((item, key) =>
            item.text ? (
              <Message key={key} data={item} />
            ) : (
              <Poll key={key} data={item} />
            ),
          )}
        </View>
      </ScrollView>
      <InputToolbar
        onSend={text => onSendMessage(text)}
        openPoll={() => setCreatePollVisible(true)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    padding: 20,
    paddingBottom: 0,
  },
});

export default MainApp;
