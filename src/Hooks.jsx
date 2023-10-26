import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <p>
        Current Counter : <b>{value}</b>
      </p>
      <button onClick={() => setValue(value + 1)}>increase</button>
      <button onClick={() => setValue(value - 1)}>decrease</button>
    </>
  );
};
export default Counter;
