const WelcomeProp = (props) => {
  return (
    <>
      <h1> Hello, my name is {props.name}</h1>
      <h2> my age is {props.age}</h2>
      <h2> my address is {props.addr} </h2>
    </>
  );
};

export default WelcomeProp;
