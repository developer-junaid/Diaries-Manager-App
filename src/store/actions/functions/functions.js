export const createNotification = (firestore, notification, dispatch) => {
  firestore
    .collection("notifications")
    .add(notification)
    .then(() => {
      // Notification success
      dispatch({
        type: "CREATE_NOTIFICATION",
        notification,
      });
    })
    .catch((err) => {
      // Dispatch the Error Action
      dispatch({ type: "CREATE_NOTIFICATION_ERROR", err });
    });
};
