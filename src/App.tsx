import { useState, useEffect } from "react";
import Header from "./Blocs/Header";
import HeroBanner from "./Blocs/HeroBanner";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { particlesConfig } from "./utils/particles.config";
import Missions from "./Blocs/Missions";
import Services from "./Blocs/Services";
import "./App.css";

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  return (
    <main className="sirrtech__main">
      <section className="sirrtech__hero">
        {ready && (
          <Particles id="tsparticles" options={particlesConfig}></Particles>
        )}
        <Header></Header>
        <HeroBanner></HeroBanner>
      </section>
      <Missions></Missions>
      <Services></Services>
    </main>
  );
}

export default App;
