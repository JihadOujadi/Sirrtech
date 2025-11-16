import Title from "../Components/Titre";
import "../styles/Missions.css";

function Missions() {
  return (
    <section className="sirrtech__missions">
      <div className="sirrtech__missions__title">
        <Title text="Nos Missions" variant="sirrtech__title--colored"></Title>
        <p className="sirrtech__missions__title-text">
          Chez SIRRTECH, nous croyons que l’intelligence artificielle n’est pas
          réservée aux grandes entreprises. Nous aidons les marques, les
          e-commerçants et les équipes à transformer leurs processus manuels en
          systèmes intelligents, connectés et évolutifs. Notre objectif : créer
          des solutions concrètes, simples à déployer et réellement utiles à
          votre business.
        </p>
      </div>
    </section>
  );
}

export default Missions;
