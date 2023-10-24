import "./App.css"
import Section from "./Section";
// import WelcomeProp from "./WelcomeProps";

function App() {
  
  return (
    <>
      {/* <WelcomeProp name = "Jessy" addr="NewYork" age = {22}/>
      <WelcomeProp name = "Amy" addr="LosAngeles" age = {25}/>
      <WelcomeProp name = "Kanna" addr="Tokyo" age = {18}/> */}
      <Section title="Section 1번" content="This is the content for section 1" />
      <Section title="Section 2번" content="This is the content for section 2"/>

    </>
  );
}

export default App;
