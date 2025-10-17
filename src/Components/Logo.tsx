import LogoSirrtech from "../assets/sirrtech-logo.png";
import "../styles/Logo.css";
function Logo() {
  return (
    <div className="sirrtech__logo-container">
      <img src={LogoSirrtech} alt="Sirrtech Automatisation et Intégration IA" />
    </div>
  );
}

export default Logo;
