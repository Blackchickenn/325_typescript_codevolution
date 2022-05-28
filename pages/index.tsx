import type { NextPage } from "next";
import Greet from "../components/greet";
import Person from "../components/person";
import PersonList from "../components/personList";
import Status from "../components/status";
import Heading from "../components/heading";
import Oscar from "../components/oscar";
import Button from "../components/button";
import Input from "../components/input";
import Container from "../components/container";

const Home: NextPage = () => {
  const fullName = {
    firstName: "Bruce",
    lastName: "Wayne",
  };
  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Tony",
      last: "Stark",
    },
  ];
  return (
    <div>
      <Heading name={"Ivanka"}>Placeholder Text</Heading>
      <Oscar>
        <Heading name={"Marcel"}>Oscar goes to Leonardo Dicaprio</Heading>
      </Oscar>
      <Greet name="Marcel" isLogged={true} />
      <Person name={fullName} />
      <PersonList names={nameList} />
      <Status status="error" />
      <Button handleClick={() => console.log("button Clicked")} />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container
        styles={{
          border: "1px solid black",
          margin: "2rem",
          backgroundColor: "yellow",
        }}
      />
    </div>
  );
};

export default Home;
