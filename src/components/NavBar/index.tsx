import "./styles.scss";

const NavBar = () => {
  return (
    <nav className="page-navbar">
      <ul>
        <li className="">
          <a href="#presentation">Início</a>
        </li>
        <li>
          <a href="#combo">Combos Promocionais</a>
        </li>
        <li>
          <a href="#services">Serviços</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
