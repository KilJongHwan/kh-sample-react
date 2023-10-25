import { useState } from "react";

function Radiobox() {
  const [selectVal, setSelectVal] = useState("apple");

  function handleChange(e) {
    setSelectVal(e.target.value);
  }
  return (
    <>
      <label htmlFor="apple">
        apple
        <input
          type="radio"
          name="fruits"
          id="apple"
          value="apple"
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor="orange">
        orange
        <input
          type="radio"
          name="fruits"
          id="orange"
          value="orange"
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor="strawberry">
        strawberry
        <input
          type="radio"
          name="fruits"
          id="strawberry"
          value="strawberry"
          onChange={handleChange}
        />
      </label>
      <br />
      <p>Selected fruit : {selectVal}</p>
    </>
  );
}

export default Radiobox;
