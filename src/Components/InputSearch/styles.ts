import styled from 'styled-components';


interface props{
  height?:number;
  width?:number;
}
export const Container = styled.div<props>`
 display:flex;
  border:2px solid var(--standardYellow);
  border-radius: 20px;
  max-width:300px;
  width:${props => props.width+"px"};
  height:${props=> props.height ? props.height : '35px'};
  padding: 0 15px 0 15px;
  flex:1;
  align-items:center;
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
