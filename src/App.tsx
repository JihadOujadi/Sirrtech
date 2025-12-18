import { useState, useEffect } from "react";
import Header from "./Blocs/Header";
import HeroBanner from "./Blocs/HeroBanner";

import Missions from "./Blocs/Missions";
import "./App.css";

function App() {
  return (
    <main className="sirrtech__main">
      <section className="sirrtech__hero">
        <Header></Header>
        <HeroBanner></HeroBanner>
      </section>
      <Missions></Missions>
    </main>
  );
}

export default App;
