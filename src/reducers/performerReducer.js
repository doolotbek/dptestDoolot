var initialState = {
    performer: {},
    receiverUser: "",
    performers: []
  };
  
  const performerReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN":
        return Object.assign({}, state, {
          performer: action.performer
        });
      case "SET_ONLINE_PERFORMERS":
        return Object.assign({}, state, {
          performers: action.performers
        });
  
      case "SET_RECEIVER":
        return Object.assign({}, state, {
          receiverPerformer: action.receiverPerformer
        });
  
    

      case "ALL_PERFORMERS":
        return Object.assign({}, state, {
          all_performers:action.all_performers
        });

      default:
        return state;

    }
  };
  
export default performerReducer;
