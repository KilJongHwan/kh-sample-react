import { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState([
    { id: 1, text: "html practice" },
    { id: 2, text: "css study" },
    { id: 3, text: "javascript" },
    { id: 4, text: "react learn" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  const onChange = (e) => setInputText(e.target.value); // 내용이 입력될 때 변경을 감지
  // 버튼이 눌러졌을 때 새로운 todo List 추가
  const onClick = () => {
    const nextTodo = todo.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setTodo(nextTodo); // 새로운 todo List 반영하고 리랜더링
    setInputText(""); // 입력창 초기화
  };

  const onRemove = (id) => {
    const removedTodo = todo.filter((e) => e.id !== id);
    setTodo(removedTodo);
  };

  //   const newTodoList = todo.map((e) => <li key={e.id}>{e.text}</li>);
  const newTodoList = todo.map((e) => (
    <li key={e.id} onDoubleClick={() => onRemove(e.id)}>
      {e.text}{" "}
    </li>
  ));

  return (
    <>
      <p className="title-name">To do List</p>
      <p className="del-guide">Delete : Object DoubleClick</p>
      <input type="text" value={inputText} onChange={onChange} />
      <button onClick={onClick}>input</button>
      <ul>{newTodoList}</ul>
    </>
  );
};
export default TodoList;
