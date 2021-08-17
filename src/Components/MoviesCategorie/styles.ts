import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    flex:1;
   
`;
export const CategoriName = styled.h1`
    font-family: 'Hammersmith One', sans-serif;
    font-weight: 400;
    font-size: 36px;
    /* letter-spacing: 0.1em; */
    text-transform: uppercase;
    color:#ffff;

    @media(max-width:800px){
        font-size: 30px;
    }
    @media(max-width:500px){
        font-size: 20px;
    }
`;
export const Row = styled.div`
   
    display:flex;
    flex-direction:column;
    
    justify-content:space-between;
    margin-bottom:40px;
    height:410px;
    
    margin-bottom:80px;
    
    >div{
        display:flex;
        align-items:center;
        flex:1;
    }

`;


export const ListMovies = styled.div`
   display:flex;
   align-items:center;
   justify-content:flex-start;
   cursor: pointer;
   min-height:380px;

   div + div{
       margin-left:10px;
       
   }
   @media(max-width:500px){
        div + div{
            margin-left:0px;
        }
    }
    overflow-x:scroll;
   ::-webkit-scrollbar {
    
    height:10px;
    
    }
    /* Track */
    ::-webkit-scrollbar-track {
    background:#0D132B; 
    border-radius:5px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background:#15214A; 
        border-radius:5px;
        border:1px solid #0D132B;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background:#FFBD59; 
    }


`;