import { Fragment } from "react";

function App() {
  const member = {
    name: "james",
    age: 22,
    addr: "Newyork"
  };
  const style = {
    backgroundColor: "#222",
    color: "royalblue",
    fontSize: "2em"
  }

  return (
    <>
      <h1 style={{color:"red"}}> hello my name is {member.name}, age is {member.age}, address is {member.addr}</h1>
      {/* 조건부 랜더링 : 3항 연산자 사용하는 방법 */}
      {member.name === "리액트" ? <h1>this is react</h1> : <h1>no react</h1>}
      {/* 조건부 랜더링 : AND 연산자 사용 */}
      {member && <h1 style={style}>{member.name} has been logged in</h1>}
      <div className="App">
        <p className="title-name"></p>
        <p className="title-name"></p>
        <p className="title-name"></p>
        <p className="title-name"></p>
      </div>
      <br/>
    </>
  );
}

export default App;
