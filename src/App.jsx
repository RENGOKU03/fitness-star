import { useState } from "react";
import "./App.css";
import ExcerciseDetail from "./components/ExcerciseDetail";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  const [excercise, setExcercise] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <>
      <Nav
        excercise={excercise}
        setExcercise={setExcercise}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Hero
        excercise={excercise}
        setExcercise={setExcercise}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </>
  );
}

export default App;
