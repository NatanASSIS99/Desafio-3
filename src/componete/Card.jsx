import Styles from './Card.module.css';
import Lpdnc from './imagem/Lpdnc.svg';
import PortCap from './imagem/Port.Cap.png';
import BootCap from './imagem/BootCap.png';

function Card() {
  return (
    <div className={Styles.Card}>
      <h1>Projetos</h1>
      <img src={Lpdnc} alt="Descrição da imagem" /> 

      
















      <p>
        Desenvolvimento de Landing Page 
        para o curso de Formação em Tecnologia
      </p>
      <img src={ PortCap} alt="Descrição da imagem" /> 
      <p>Desenvolvimento de portfólio exemplo</p>
      <img src={ BootCap} alt="Descrição da imagem" /> 
      <p>Desenvolvimento BOOTCAMP DNC</p>
    
      <a href='https://github.com' target="_blank" rel="noopener noreferrer">
        <button>Saber mais</button>
      </a>
    </div>
  );
}

export default Card;