import "./styles.scss";

import {
  AiOutlineMedicineBox,
  GiMedicines,
  RiHotelBedLine,
  FaUserNurse,
  FaHeartbeat,
  FaStethoscope,
} from "react-icons/all";

const Services = () => {
  return (
    <div id="services" className="page-services">
      <h2>Alguns dos serviços que são realizados no atendimento domiciliar</h2>
      <div className="services-grid">
        <div className="services-grid__item">
          <FaStethoscope />
          <p>Consulta Médica</p>
        </div>
        <div className="services-grid__item">
          <FaUserNurse />
          <p>Aconselhamento em Enfermagem</p>
        </div>
        <div className="services-grid__item">
          <AiOutlineMedicineBox />
          <p>Troca de Curativos</p>
        </div>
        <div className="services-grid__item">
          <RiHotelBedLine />
          <p>Troca de Sondas</p>
        </div>
        <div className="services-grid__item">
          <GiMedicines />
          <p>Administração de Medicamentos</p>
        </div>
        <div className="services-grid__item">
          <FaHeartbeat />
          <p>Eletrocardiograma com Laudo</p>
        </div>
      </div>
      <div>
        <button type="button" className="btn btn--confirm">
          Ver mais serviços
        </button>
      </div>
    </div>
  );
};

export default Services;
