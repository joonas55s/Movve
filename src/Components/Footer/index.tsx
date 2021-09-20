import React from 'react';

import { Container } from './styles';
import LineDivider from '../LineDivider';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';

const Footer: React.FC = () => {
    return (
        <Container>
            <LineDivider width="50%" />
            <p>Desenvolvido por Jonas de Souza</p>
            <div>
                <a href="https://www.linkedin.com/in/jonas-de-souza-95091b186/"><FaLinkedinIn size="20"/></a>  
                <a href="https://github.com/joonas55s"><FaGithub size="20"/></a>
            </div>
            <p id="footer">© 2021 Movve. Todos os direitos reservados.</p>
            
        </Container>
    );
}

export default Footer;