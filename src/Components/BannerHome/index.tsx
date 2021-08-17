import React from 'react';

import { Container,Banner } from './styles';
import {MdKeyboardArrowRight} from 'react-icons/md';
import { useLocation } from 'react-router-dom';

const BannerHome: React.FC = () => {
  const searchurl = useLocation().search;

  function verMais(id:string){
    window.location.href = searchurl+`/details?id=${id}`;
  }
  
  return(
      <Container url={"https://www.diariodetaubateregiao.com.br/dt/wp-content/uploads/2019/02/artigo-05-1.jpg"}>
        <Banner >
          <strong>Uma ciborgue é descoberta por um cientista. Ela não tem memórias de sua criação, mas possui grande conhecimento de artes marciais. Enquanto busca informações sobre seu passado, trabalha como caçadora de recompensas e descobre um interesse amoroso.</strong>
          <button onClick={()=>verMais("399579")}>Ver mais <MdKeyboardArrowRight/></button>
        </Banner>
      </Container>
  );
}

export default BannerHome;