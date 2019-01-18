export const performerActions = {
    login: performer => ({
      type: "LOGIN",
      performer
    }),
    logout: () => ({
      type: "LOGOUT"
    }),
    setOnlinePerformers: performers => ({
      type: "SET_ONLINE_PERFORMERS",
      performers
    }),
    allPerformers: all_performers => ({
      type: "ALL_PERFORMERS",
      all_performers
    }),
    setReceiver: receiverPerformer => ({
      type: "SET_RECEIVER",
      receiverPerformer
    })
};