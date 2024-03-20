const Notification = ({ errorMessage, updateMessage }) => {
  if (errorMessage === null && updateMessage === null) {
    return null;
  }
  if (errorMessage !== null) {
    return <div className="error">{errorMessage}</div>;
  }
  if (updateMessage !== null) {
    return <div className="update">{updateMessage}</div>;
  }
};

export default Notification;
