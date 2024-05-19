import Style from './Footer.module.css'
import { FaLinkedin, FaGithubSquare,  } from "react-icons/fa";
function Footer(){
    return(
        <div >
            <ul className={ Style.Footer} >
                <li> Meu Contato:  98 - 98149-3608</li>
                <li>Email: natandosssantosassis@gmail.com</li>
            
                <a href='https://github.com'><FaGithubSquare size={30} /></a>  
                <a href='https://www.linkedin.com/in/natan-dos-santos-assis-780b56243/' ><FaLinkedin size={30}/></a> 
              
                </ul>
           
            
        </div>
    )
}
export default Footer