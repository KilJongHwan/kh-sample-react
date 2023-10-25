import { useState } from "react";

const FruitSelect = () => {
  const [value, setValue] = useState("orange");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    alert("Select furuit : " + value);
    e.preventDefault(); // 기본 이벤트를 막는 함수
  };
  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <label>
          Select Fruit{" "}
          <select value={value} onChange={handleChange}>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="grape">Grape</option>
            <option value="watermelon">WaterMelon</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FruitSelect;
