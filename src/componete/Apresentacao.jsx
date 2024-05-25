import { useEffect, useState } from 'react';
import styles from './Apresentacao.module.css';

function Apresentacao() {
    const [text, setText] = useState('');
    const toRotate = ['Natan Assis', 'Desenvolvedor Front End!!!!'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setDeleting] = useState(false);
    const period = 200;
    const [delta, setDelta] = useState(100); 

    useEffect(() => {
        let ticker = setInterval(() => {
            toType();
        }, delta);
        return () => clearInterval(ticker);
    }, [text]);

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setDeleting(false);
            setDelta(100); 
            setLoop(loop + 1);
        } else {
            setDelta(100); 
        }
    };

    return (
        <div className={styles.Apresentacao} id='Apresentacao'>
            <h1>Olá, eu sou {text}</h1>
            <p>
                A perfeição não é alcançada quando já não há mais nada <br />
                para adicionar, mas quando já não há mais nada que se retirar.
            </p>
            <a href='https://github.com' target="_blank" rel="noopener noreferrer">
                <button>Saber mais</button>
            </a>
        </div>
    );
}

export default Apresentacao;