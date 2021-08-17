import styled from 'styled-components';



export const Container = styled.div`
  display:flex;
  max-width:100%;
  flex-direction:column;
  height:610px;

   
  justify-content:center;
  align-items:center;


  
`;


export const Title = styled.strong`
    font-family: 'Baloo';
    font-style: normal;
    font-weight: bold;
    font-size: 36px;


    color: #FFFFFF;
    margin-bottom:42px;
`;
export const CarouselObj = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    width:100%;
    
    background:transparent;
    overflow-x:hidden;
  >div{
    margin-left:-80px;

    :hover{
      z-index:10;
      >div{
        margin-left:50px;
      }
    }
  }
`;