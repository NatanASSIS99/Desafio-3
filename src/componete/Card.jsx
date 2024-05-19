import Styles from './Card.module.css';
import Lpdnc from './imagem/Lpdnc.svg';

function Card() {
  return (
    <div className={Styles.Card}>
      <h1>Projeto</h1>
      <img src={Lpdnc} alt="Descrição da imagem" /> 
      <p>
        Desenvolvimento de Landing Page 
        para o <br/> o curso de Formação em Tecnologia
      </p>
      <a href='https://github.com' target="_blank" rel="noopener noreferrer">
        <button>Saber mais</button>
      </a>
    </div>
  );
}

export default Card;