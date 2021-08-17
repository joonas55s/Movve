import styled from 'styled-components';


interface props{
  height?:number;
  width?:number;
  urlImg?:string;
}
export const Container = styled.div<props>`
  display:flex;
  flex-direction:column;
  min-width:228px;
  min-height:308px;
  
`;

export const OverLay = styled.div`
  z-index:2;
  background-color: rgba(19,31,68, 0.3) ;
  height: 100%;
  width: 100%;
  transition:background-color 0.2s;
  :hover{
    /* background-color: rgba(19,31,68, 0.1) ; */
    background: rgba(45, 31, 12, 0.75);
  }
`;


export const Content = styled.div<props>`
  height:100%;
  width:100%;
  background-image:url(${props => props.urlImg});
  background-repeat: no-repeat;
  background-size:100%;
  background-position: center;
  border-radius:10px;
  position: relative;
  button{
    display:none;
    position: absolute;
    top:40%;
    left:15%;
    z-index:5;
    height:50px;
    width:150px;
    border-radius:25px;
    outline:none;
    border:none;
    background:#FFBD59;
    letter-spacing: 0.295em;
    text-transform: uppercase;
    cursor: pointer;
    color: #FFFFFF;
  }
  :hover{
    button{
      display:block;
    }
  }
`;

export const Poster = styled.div<props>`
  display:flex;
  align-items:center;
  justify-content:center;
  height:${props => props.height ? props.height+'px' : '298px' };
  min-width:${props => props.width ? props.width+'px' : '208px' };
  
  
  border-radius:10px;
  padding:10px;
  cursor: pointer;

  overflow:hidden;

  box-shadow: -4px 0px 30px 15px rgba(0, 0, 0, 0);
  transition: all .2s ease;
  :hover{
    padding:0px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
  }
`;

export const Extras = styled.div`

  display:flex;
  flex-direction:column;
  padding:0 5px;
  >strong{
    letter-spacing: 1px;
    
  }
  strong{
    margin-top:5px;
    font-size:12px;
    color:#ffff;
    text-transform:uppercase;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .note{
    margin-top:5px;
    font-size:15px;
  }
  div{
    display:flex;
  }
`;