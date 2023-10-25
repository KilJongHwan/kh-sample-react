import { useState } from "react";

const EventHandler = () => {
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(userName + " : " + message);
    setUserName("");
    setMessage("");
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") onClick();
  };
  return (
    <>
      <h1>Event Practice</h1>
      <input
        type="text"
        placeholder="UserName"
        value={userName}
        onChange={onChangeUserName}
      />
      <input
        type="text"
        placeholder="Message"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>Check</button>
    </>
  );
};
export default EventHandler;
