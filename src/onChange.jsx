// onChange 이벤트 핸들링
import { useState } from "react";

const EventPractice = () => {
  const [message, setMessage] = useState("Hello");
  const changeMsg = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
      <h1>Event Practice</h1>
      <input type="text" placeholder="Input Name" onChange={changeMsg} />
      <h2>Input MSG : {message}</h2>
    </>
  );
};
export default EventPractice;
