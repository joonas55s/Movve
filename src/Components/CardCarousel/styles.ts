import styled from 'styled-components';


interface props{
  height?:number;
  width?:number;
  urlImg?:string;
}
export const Container = styled.div`
  display:flex;
  align-items:center;
  height:411px;
  transition: all 0.3s;
  :hover{
    
  
   
  }
`;

export const OverLay = styled.div`
  background-color: rgba(19,31,68, 0.6) ;
  height: 100%;
  width: 100%;
  transition:background-color 0.2s;
  :hover{
    background-color: rgba(19,31,68, 0.1) ;
  }
`;


export const Content = styled.div<props>`
 
 
  border-radius:10px;
  background:white;
`;