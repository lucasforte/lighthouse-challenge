import { FiTruck } from "react-icons/fi";
import productImage from "../../assets/products-images/product-image.png";

import "./styles.scss";

const ComboCard = () => {
  return (
    <div className="combo-card">
      <figure className="combo-card__image">
        <img
          src={productImage}
          alt="Representação de uma embalagem de remédio com os dizeres 'IMAGEM PROIBIDA PELA ANVISA'"
        />
      </figure>
      <div className="combo-card__product-name">
        <p>Amoxil 500mg 150ml</p>
        <span>código: 155030</span>
      </div>
      <div className="combo-card__shipping">
        <FiTruck />
        <p>
          Aplicação Domiciliar <span>Gratuíta</span>
        </p>
      </div>
      <div className="combo-card__price">
        <p className="price">
          <span className="price__currency">R$</span>895
          <span className="price__cents">,09</span>
        </p>
        <p className="price price--promotional">
          <span className="price__currency">R$</span>775
          <span className="price__cents">,09</span>
        </p>
      </div>
      <span className="payment-option">10x de R$ 58.25 sem juros</span>
    </div>
  );
};

export default ComboCard;
