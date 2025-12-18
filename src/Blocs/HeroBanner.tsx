import "../styles/HeroBanner.css";
import { gsap } from "gsap";
import { useRef, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { particlesConfig } from "../utils/particles.config";

function HeroBanner() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const spans = titleRef.current.querySelectorAll(
      ".sirrtech__hero-banner__title--element"
    );

    // Configuration du timeline
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.2,
    });

    spans.forEach((span, index) => {
      // Réinitialiser la position de départ
      tl.set(span, { y: 20, autoAlpha: 0 }, index > 0 ? "+=0.2" : undefined);

      // Animation d'entrée depuis le bas
      tl.to(span, {
        autoAlpha: 1,
        y: 0, // Arrive à sa position normale
        duration: 0.3,
        ease: "power2.out",
      });

      // Pause sur le mot
      tl.to({}, { duration: 0.5 });

      // Animation de sortie vers le haut
      tl.to(span, {
        autoAlpha: 0,
        y: -20, // Sort vers le haut
        duration: 0.3,
        ease: "power2.in",
      });
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="sirrtech__hero-banner">
      {ready && (
        <Particles id="tsparticles" options={particlesConfig}></Particles>
      )}
      <div className="sirrtech__hero-banner__title-container">
        <h1 ref={titleRef} className="sirrtech__hero-banner__title">
          <span className="sirrtech__hero-banner__title--element">
            Automatisez.
          </span>
          <span className="sirrtech__hero-banner__title--element">
            Innovez.
          </span>
          <span className="sirrtech__hero-banner__title--element">
            Accélérez.
          </span>
        </h1>
        <div className="sirrtech__hero-banner__content">
          <h2 className="sirrtech__hero-banner__subtitle">
            SIRRTECH conçoit des solutions d'automatisation et d'intégration IA
            sur mesure pour les entreprises et e-commerçants qui veulent passer
            à la vitesse supérieure.
          </h2>
          <p className="sirrtech__hero-banner__text">
            Gagnez du temps, éliminez les tâches répétitives et concentrez-vous
            sur ce qui crée de la valeur.
          </p>
          <a href="" className="sirrtech__hero-banner__cta">
            <p className="sirrtech__hero-banner__cta--text">
              Découvrez nos solutions
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
