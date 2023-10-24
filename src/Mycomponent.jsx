// props 기본값 설정 : defaultProps
const MyComponent = props => {
    return <div>Hello, My Name is {props.name} age is {props.age}</div>
}
MyComponent.defaultProps = {
    name: "default name",
    age: 20
}

export default MyComponent;