// props 기본값 설정 : defaultProps
const MyComponent = ({ name, age, children }) => {
  // 비구조화할당(구조 분해) : props 객체의 속성과 값을 변수에 대입 함

  return (
    <div>
      Hello, My Name is {name} age is {age}, greeting
      {children}
    </div>
  );
};
MyComponent.defaultProps = {
  name: "default name",
  age: 20,
};

export default MyComponent;
