import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChatItemWrapper, Avatar, ChatMetadata, EmailLayer } from './styles';

const ChatItem = ({ fullName, timestamp, email, message, index, avatar }) => {
  const [isHovering, setIsHovering] = useState(false);
  const options = {hour: 'numeric', minute: 'numeric'};
  const time = new Date(timestamp).toLocaleDateString('en-GB', options );
  return (
    <ChatItemWrapper
      onMouseOver={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      index={index}
    >
      {avatar && <Avatar src={avatar} title={email} alt={`${fullName} Avatar`}/>}
      <div>
        <ChatMetadata>{fullName} - {time}</ChatMetadata>
        <div>{message}</div>
      </div>
      {isHovering && <EmailLayer>{email}</EmailLayer>}
    </ChatItemWrapper>
  );
};

ChatItem.propTypes = {
  message: null,
  avatar: null,
};

ChatItem.propTypes = {
  fullName: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  message: PropTypes.string,
  avatar: PropTypes.string,
};

export default ChatItem;