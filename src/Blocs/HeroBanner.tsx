import "../styles/HeroBanner.css";

function HeroBanner() {
  return (
    <section className="sirrtech__hero-banner">
      <div className="sirrtech__hero-banner__title-container">
        <h1 className="sirrtech__hero-banner__title">
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
        <h2 className="sirrtech__hero-banner__subtitle">
          SIRRTECH conçoit des solutions d’automatisation et d’intégration IA
          sur mesure pour les entreprises et e-commerçants qui veulent passer à
          la vitesse supérieure.
        </h2>
        <p className="sirrtech__hero-banner__text">
          Gagnez du temps, éliminez les tâches répétitives et concentrez-vous
          sur ce qui crée de la valeur.
        </p>
        <a href="" className="sirrtech__hero-banner__cta">
          Découvrez nos solutions
        </a>
      </div>
    </section>
  );
}

export default HeroBanner;
