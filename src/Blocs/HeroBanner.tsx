import "../styles/HeroBanner.css";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

function HeroBanner() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const spans = titleRef.current.querySelectorAll(
      ".sirrtech__hero-banner__title--element",
    );

    //Initialisation de tous les Spans au début
    gsap.set(spans, { y: 20, autoAlpha: 0 });

    // Configuration du timeline
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.2,
    });

    spans.forEach((span, index) => {
      // Animation d'entrée depuis le bas
      tl.to(
        span,
        {
          autoAlpha: 1,
          y: 0, // Arrive à sa position normale
          duration: 0.3,
          ease: "power2.out",
        },
        index > 0 ? "+=0.2" : undefined,
      );

      // Pause sur le mot
      tl.to({}, { duration: 0.5 });

      // Animation de sortie vers le haut
      tl.to(span, {
        autoAlpha: 0,
        y: -20, // Sort vers le haut
        duration: 0.3,
        ease: "power2.in",
      });

      // Réinitialisation de la position pour les prochains cycle
      tl.set(span, { y: 20 });
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="sirrtech__hero-banner">
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
    </div>
  );
}

export default HeroBanner;
