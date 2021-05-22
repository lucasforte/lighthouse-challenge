import ComboCard from "../ComboCard";
import "./styles.scss";

const Combo = () => {
  const cards = [<ComboCard />, <ComboCard />, <ComboCard />, <ComboCard />];

  return (
    <div id="combo" className="page-combo">
      <div className="combo-title">
        <h2>Combos Promocionais</h2>
        <a href="$">Ver mais</a>
      </div>
      <div className="combo-cards">{cards.map((card) => card)}</div>
    </div>
  );
};

export default Combo;
