import React, { useState, useEffect, Fragment } from 'react';

import ChatItem from './components/ChatItem';
import ChatWrapper from './components/ChatWrapper';
import Header from './components/Header';

import { getMembers, getMessages } from './data';
import getChatLog, { sort }  from './service';

import GlobalStyle, { Container } from './globalStyles';
import LoadingOverlay from './components/LoadingOverlay';

const App  = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([getMembers(), getMessages()])
      .then(([members, messages]) => {
        if(members.length && messages.length) {
          setMessages(messages.map(msg => getChatLog(msg, members)).sort(sort));
          setLoading(false);
          console.log(messages.map(msg => getChatLog(msg, members)).sort(sort));
        }
      });
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Container>
        {loading && <LoadingOverlay />}
        <ChatWrapper>
          {messages.map((msg, index) => <ChatItem key={msg.messageId} index={index} {...msg} />)}
        </ChatWrapper>
      </Container>
    </Fragment>
  );
};

export default App;
