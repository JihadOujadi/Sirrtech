import Title from "../Design System/Titre";
import "../styles/Services.css";

function Services() {
  return (
    <section className="sirrtech__services">
      <div className="sirrtech__serivces__title">
        <Title text="Nos services"></Title>
        <div className="sirrtech__services__subtitle-container">
          <h3 className="sirrtech__services__subtitle">
            Ce que nous faisons :
          </h3>
          <p className="sirrtech__services__text">
            Des solutions IA et d’automatisation adaptées à votre activité.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
