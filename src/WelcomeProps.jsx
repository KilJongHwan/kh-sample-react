const WelcomeProp = (props) => {
    return (
        <>
            <h1> Hello, my name is {props.name}</h1>
            <h1> my age is {props.age}</h1>
            <h1> my address is {props.addr} </h1>
        </>
    );
}

export default WelcomeProp;
