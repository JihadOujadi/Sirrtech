import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Blocs/Header";
import HeroBanner from "./Blocs/HeroBanner";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="sirrtech__main">
      <section className="sirrtech__hero">
        <Header></Header>
        <HeroBanner></HeroBanner>
      </section>
    </main>
  );
}

export default App;
