import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Blocs/Header";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="sirrtech__main">
      <Header></Header>
    </main>
  );
}

export default App;
