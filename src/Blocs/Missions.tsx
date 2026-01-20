import Title from "../Design System/Titre";
import "../styles/Missions.css";
import Cards from "../Components/Cards";
import Efficacite from "../Design System/IconEfficacite";
import Innovation from "../Design System/IconInnovation";
import Simplicite from "../Design System/IconSimplicite";
import Arrow from "../Design System/Arrow";

const missionsData = [
  {
    id: 1,
    icon: <Efficacite />,
    title: "Efficacité",
    text: "L’automatisation au service du résultat",
  },
  {
    id: 2,
    icon: <Innovation />,
    title: "Innovation",
    text: "Des outils IA adaptés à vos besoins",
  },
  {
    id: 3,
    icon: <Simplicite />,
    title: "Simplicité",
    text: "Des intégrations claires, sans complexité inutile",
  },
];

function Missions() {
  return (
    <section className="sirrtech__missions">
      <div className="sirrtech__missions__title">
        <Title text="Nos Missions" variant="sirrtech__title--colored"></Title>
        <p className="sirrtech__missions__title-text">
          Chez <strong>SIRRTECH</strong>, nous croyons que l’intelligence
          artificielle n’est pas réservée aux grandes entreprises. Nous aidons
          les marques, les e-commerçants et les équipes à transformer leurs
          processus manuels en systèmes intelligents, connectés et évolutifs.
          Notre objectif : créer des solutions concrètes, simples à déployer et
          réellement utiles à votre business.
        </p>
      </div>
      <div className="sirrtech__missions__cards">
        {missionsData.map((mission) => (
          <Cards
            key={mission.id}
            title={mission.title}
            text={mission.text}
            icon={mission.icon}
          ></Cards>
        ))}
        <div className="sirrtech__card-information">
          <div className="sirrtech__card-information__description">
            <h3 className="sirrtech__card-information__description-title">
              Besoin d'informations ?
            </h3>
            <div className="sirrtech__card-information__description-content">
              <p className="sirrtech__card-information__description-text">
                Contactez-nous
              </p>
              <p className="sirrtech__card-information__description-text">
                Nous répondrons à vos questions
              </p>
            </div>
          </div>
          <a href="#" className="sirrtech__card-information__contact">
            <p className="sirrtech__card-information__contact-text">
              Contactez-Nous
            </p>
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Missions;
