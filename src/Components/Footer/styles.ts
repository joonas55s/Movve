import styled from 'styled-components';

export const Container = styled.div`
  grid-area:FB;
  display:flex;
  flex-direction:column;
  font-weight:100;
  justify-content:space-between;
  align-items:center;
  padding-bottom:15px;
  color:white;
  font-size:15px;
  div{
    display: flex;
  }
  #footer{
    font-style: italic;
    font-size: 11px;

  }
  @media(max-width:500px){
        font-size: 10px;
    }

  svg {
    color:white;
  }
  a{
    margin:2px 15px 0px 15px;
  }
  a :hover{
    background-color: rgba(239,216, 120, 0.3);
    color:var(--standardYellow);
    border-radius: 50px;
    padding: 3px;
  }
`;
