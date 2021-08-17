import styled from 'styled-components';


interface props{
  height?:number;
  width?:number;
}
export const Container = styled.div<props>`
  display:flex;
  align-items:center;
  border-bottom:2px solid var(--standardYellow);

  width:${props => props.width ? props.width+"px" : '400px'};
  height:${props=> props.height ? props.height+"px" : '35px'};
  padding: 0 15px 0 15px;
  
  input{
    background: transparent;
    color:#ffffff;
    border:none;
    flex:1;
    outline: none;
    
  }

  svg{
    color:#ffffff;
  }
`;
