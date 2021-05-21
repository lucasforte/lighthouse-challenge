import "./styles.scss";

const Header = () => {
  return (
    <header className="page-header">
      <div className="page-header__breadcrumb">
        <p>Página Inicial \</p>
        <span>Meds</span>
      </div>
      <button type="button" className="btn btn--back">
        Voltar
      </button>
    </header>
  );
};

export default Header;
