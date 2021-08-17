import React, { useState } from 'react';

import { Container } from './styles';
import movve_logo from '../../assets/movve_logo.png';
import mini_movve_logo from '../../assets/mini_movve_logo.png';
import InputSearch from '../InputSearch';
import LineDivider from '../LineDivider';
import { HiMenuAlt2 } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';


const TopBar: React.FC = ({ children }) => {
  const search = useLocation().search;
  const [showLinks, setShowLinks] = useState(false);
  let  params = new URLSearchParams(search);

  function ReturnBase(genre:string){
    params.delete('details');
    params.delete('id');
    let fullurl = window.location.href;
    let url = fullurl.split('/');
   
    if(url.length>2){
      window.location.href = url[0]+"//"+url[2]+"/"+genre;
    }else{
      window.location.href = url[0]+"//"+url[2]+"/";
    }
   
  }
  

  return (
    <Container>

      <div className={"navBar"} id="navBar">
        
        <div className="leftSide">
          
          <div className="links" id={showLinks ? "hidden" : ""}>
            <img src={movve_logo} />
          
              <button onClick={()=>ReturnBase("")} >Home</button>
              <button onClick={()=>ReturnBase("#Ação")} >Ação</button>
              <button onClick={()=>ReturnBase("#Comédia")} >Comédia</button>
              <button onClick={()=>ReturnBase("#Drama")} >Drama</button>
              <button onClick={()=>ReturnBase("#Thriller")} >Thriller</button>
            
          </div>
          <div className="miniBar">
            <img src={mini_movve_logo} />
            <button onClick={() => setShowLinks(!showLinks)}>
              <HiMenuAlt2 size={30} color="white" />
            </button>
          </div>
        </div>
        <div className="rightSide">
         
          {children}
          {/* <InputSearch placeholder="Pesquise por filmes, séries, categorias..." /> */}
        </div>

      </div>

      <LineDivider width={"95%"} />

    </Container>
  );
}

export default TopBar;