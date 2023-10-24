import React, { useState } from "react";
const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("welcome");
  const onClickLeave = () => setMessage("Bye");
  const [val, setColor] = useState("black");

  return (
    <>
      <button onClick={onClickEnter}>Enter</button>
      <button onClick={onClickLeave}>Leave</button>
      <h1 style={{ color: val }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        Red
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        Green
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        Blue
      </button>
    </>
  );
};
export default Say;
