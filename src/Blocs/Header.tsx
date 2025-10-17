import Logo from "../Components/Logo";
import Menu from "../Components/Menu";
import "../styles/Header.css";

function Header() {
  return (
    <section className="sirrtech__header">
      <Logo></Logo>
      <Menu></Menu>
    </section>
  );
}

export default Header;
