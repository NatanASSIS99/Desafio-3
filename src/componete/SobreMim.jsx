import Styles from './SobreMim.module.css'
import javaScript from './imagem/javaScript.svg'
import html from './imagem/html.svg'
import react from './imagem/react.svg'
import css from './imagem/stylesCss.svg'

function SobreMim(){
    return(
        <div 
 
        className={Styles.SobreMim} >
            <h2>
                Vou falar um pouco sobre.... <h1>2024</h1>
            </h2>
            <p>
                 Olá! me chamo Natan.
                    Durante boa parte do meu histórico profissional, 8 anos, <br/>
                    obtive grande experiência em atendimento ao público. Sou<br/>
                    eternamente grato as oportunidades que surgiram na minha vida.<br/>
                    Cursei Bacharelado em Direito por 9 períodos. É, eu acho que <br/>
                    você está se perguntando; "Por que ele não terminou a graduação?"<br/>
                    Eu respondo de uma forma bem simples. Adquiri baste conhecimento<br/>
                    durante os períodos de faculdade, sou contente  por isso,<br/>
                    com esses conhecimento, despertei a visão de realizar<br/>
                    meus objetivos. Dessa forma decidi voar em outros caminhos.<br/>  <br/> 
                    Hoje, faço parte do seleto grupo de alunos da DNC. Estou cursando <br/> 
                    a "Formação em Tecnologia". Espero, em breve, poder trabalhar com <br/> 
                    Desenvolvimento Front-end a Back-End, como um Desenvolvedor Full Stack.

            </p>
            <div>
                {/* Aqui você pode usar as variáveis para exibir as imagens */}
                <img src={javaScript} alt="JavaScript" />
                <img src={html} alt="HTML" />
                <img src={react} alt="React" />
                <img src={css} alt="CSS" />
               
               
            </div>

        </div>
    )
   
}

export default SobreMim