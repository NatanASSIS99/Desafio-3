import Styles from './NaBar.module.css'
import { FaLinkedin, FaGithubSquare,  } from "react-icons/fa";
function NavBar(){

    return(

        <div className={Styles.Nav} > 
            <ul>
                <li>Projetos</li>
                <li>Tecnologias</li>
                <li>Sobre Mim</li>

            </ul>
         
            <ul>
                <a href='https://github.com'><FaGithubSquare size={30} /></a>  
                <a href='https://www.linkedin.com/in/natan-dos-santos-assis-780b56243/' ><FaLinkedin size={30}/></a> 
            
        
            </ul>
                      
        </div> 
    )
}
 export default NavBar