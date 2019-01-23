var initialState = { messages: [], editMessage: {} };

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return addMessage(state, action.msg);
    case "GET_ALL_MESSAGES":
      return allMessage(state, action.msg);
    // case "EDIT_MESSAGE":
    //   return editMessage(state, action.msg);
      // case "DELETE_MESSAGE":
      // return deleteMessage(state, action.index)
    default:
      return state;
  }
};

function addMessage(state, message) {
  let performer = sessionStorage.getItem("data");
  performer = JSON.parse(performer);
  let newMessages = state.messages
    .filter(oldMessage => {
      return oldMessage.msgId !== message.msgId;
    })
    .slice();
  newMessages.push(message);

  let newMessage = newMessages.filter(messages => {
    return (
      messages.senderId === performer.userId ||
      messages.receiverId === performer.userId ||
      messages.receiverId === -1
    );
  });
  return Object.assign({}, state, {
    messages: newMessages
  });
}
function allMessage(state, message) {
  let performer = sessionStorage.getItem("data");
  performer = JSON.parse(performer);

  let newMessage = message.filter(messages => {
    return (
      messages.senderId === performer.performerId ||
      messages.receiverId === performer.performerId ||
      messages.receiverId === -1
    );
  });

  return Object.assign({}, state, {
    messages: newMessage
  });
}