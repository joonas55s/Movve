import React from 'react';

import { Container } from './styles';
import LineDivider from '../LineDivider';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';

const Footer: React.FC = () => {
    return (
        <Container>
            <LineDivider width="50%" />
            <p>Feito com <AiOutlineHeart color="#a85650"/> por Karina Gomes</p>
            <div>
                <a href="https://www.linkedin.com/in/karina-de-matos-gomes-a0a8121b2/"><FaLinkedinIn size="20"/></a>  
                <a href="https://github.com/karinamgomes"><FaGithub size="20"/></a>
            </div>
            <p id="footer">© 2021 Movve. Todos os direitos reservados.</p>
            
        </Container>
    );
}

export default Footer;