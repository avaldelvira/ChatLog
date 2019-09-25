const getMilliseconds = (time) => {
  return new Date(time).getTime();
};

export const sort = (a, b) => a.timestamp - b.timestamp;

const getChatLog = ({ id, userId, message, timestamp }, members) => {
  const memberIndex = members.findIndex(m => m.id === userId);
  const {avatar, firstName, lastName, email } = members[memberIndex];
  return({
    userId,
    avatar,
    email,
    fullName: `${firstName} ${lastName}`,
    messageId: id,
    message,
    timestamp: getMilliseconds(timestamp),
  })
};

export default getChatLog;
