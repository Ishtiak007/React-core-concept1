import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./todo";
import Actor from "./ActorName";
import Singer from "./singer";

function App() {
  const actorNames = [
    "Allu Arjun",
    "Shah Rukh Khan",
    "Ram Charan",
    "Provash",
    "Salman Khan",
  ];
  const singerDetails = [
    {
      id: 107,
      name: "Allu Arjun",
      nationality: "Indian",
      Industry: "Telegu",
    },
    {
      id: 108,
      name: "Shah Rukh Khan",
      nationality: "Indian",
      Industry: "Bollywood",
    },
    {
      id: 109,
      name: "Salman Khan",
      nationality: "Indian",
      Industry: "Bollywood",
    },
    {
      id: 110,
      name: "Yash",
      nationality: "Indian",
      Industry: "Kannada",
    },
  ];
  return (
    <>
      <h1>Vite + React</h1>

      {singerDetails.map((props) => (
        <Singer details={props}></Singer>
      ))}

      {actorNames.map((actors) => (
        <Actor name={actors}></Actor>
      ))}

      <Todo task="Tasfia" isDone={false}></Todo>
      <Todo task="Ashtha" isDone={false}></Todo>
      <Todo task="Takfia to hoilo na Ashtha ki hobe ???" isDone={true}></Todo>

      <InputFeild grade="7" score="55"></InputFeild>
      <InputFeild grade="27" score="755"></InputFeild>
      <InputFeild grade="37" score="58"></InputFeild>
      <InputFeild grade="75" score="10955" bari="UK"></InputFeild>
      <InputFeild></InputFeild>
      <Person></Person>
      <Person></Person>
      <Developer></Developer>
    </>
  );
}

function InputFeild({ grade = "200", score = "107", bari = "Australia" }) {
  return (
    <div className="student">
      <h2>Grade: {grade} </h2>
      <h2>Score : {score} </h2>
      <h2>Basha : {bari} </h2>
    </div>
  );
}
function Person() {
  const age = 23;
  const person = { name: "Ishtiak", age: 23, address: "ulipur" };
  return (
    <h1>
      I am {person.name} with age {person.age}. My home village in{" "}
      {person.address}{" "}
    </h1>
  );
}
function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "10px",
  };
  return (
    <div style={developerStyle}>
      <h4>Devu devu</h4>
      <p>Coding: Javasctipt</p>
    </div>
  );
}

export default App;
