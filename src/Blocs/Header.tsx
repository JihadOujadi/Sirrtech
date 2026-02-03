import Logo from "../Components/Logo";
import Menu from "../Components/Menu";
import "../styles/Header.css";

function Header() {
  return (
    <div className="sirrtech__header">
      <Logo></Logo>
      <Menu></Menu>
    </div>
  );
}

export default Header;
