import { Greet } from "./components/greet";
import { PersonDetails } from "./components/personDetails";
import { PersonList } from "./components/personList";
import { Status } from "./components/status";
import { Heading } from "./components/heading";
import Button from "./components/button";
import Input from "./components/input";
import Style from "./components/style";
import Loggedin from "./components/State/Loggedin";
import User from "./components/State/User";

function App() {
  const personName = {
    fname: "Ashiq",
    lname: "Hussain",
    // nickname:'Ashiiiiii'
  };
  const personNameList = [
    {
      firstName: "John",
      lastName: "Smith",
    },
    {
      firstName: "Emma",
      lastName: "Johnson",
    },
    {
      firstName: "Michael",
      lastName: "Brown",
    },
    {
      firstName: "Sophia",
      lastName: "Williams",
    },
    {
      firstName: "Daniel",
      lastName: "Miller",
    },
  ];
  return (
    <div className="App">
      <fieldset>
        <legend>Simple type-1</legend>
        <Greet name="Ashiii" messageCount={5} isLoggedin={true} />
      </fieldset>
      <fieldset>
        <legend>Type-2 Use separate object</legend>
        <PersonDetails name={personName} />
      </fieldset>
      <fieldset>
        <legend>Type -3 Array of object</legend>
        <PersonList names={personNameList} />
      </fieldset>
      <fieldset>
        <legend>Type-4 union</legend>
        <Status status="success" />
      </fieldset>
      <fieldset>
        <legend>Type-5 childern props</legend>
        <Heading>Placeholder text</Heading>
      </fieldset>
      <fieldset>
        <legend>Event Props</legend>
        <Button
          handeOnClick={(event, id) => console.log("Button cliked", event, id)}
        />
        <Input value="" handleOnChange={(event) => console.log(event)} />
      </fieldset>
      <fieldset>
        <legend>Style Props</legend>
        <Style style={{border:'1px solid red', padding:'7px'}} />
      </fieldset>
       <fieldset>
        <legend>UseState Hook</legend>
        <Loggedin  />
        <hr />
        <User/>
      </fieldset>
    </div>
  );
}

export default App;
