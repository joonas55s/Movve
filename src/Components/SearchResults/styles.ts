import styled from 'styled-components';

export const Container = styled.div`
  grid-area:CO;
  display:flex;
  height:100%;
  width:100%;
  padding:30px 30px 0 30px;
  z-index:15;
  opacity:0;

  background: radial-gradient(100% 100% at 50% 0%, #131F44 0%, #0C1227 99.99%, #0C1227 100%);

  opacity:1;
  h2{
    color:white;
    margin-bottom:20px;
  }
  @media(max-width:500px){
    flex-direction:column;
    
  }
`;
export const Content = styled.div`
  display:flex;
  flex:1;
  flex-direction:column;
 
  color:white;
  .header{
    display:flex;
    flex-direction:column;
    margin-top:20px;
    strong{
      font-weight:normal;
    }
    div{
      display:flex;
      justify-content:space-between;
    }
    button{
      height:40px;
      width:40px;
      float:right;
      cursor:pointer;
      
      background:transparent;
      outline:none;
      border:none;
      
    }

    .controls{
      display:flex;
      justify-content:flex-end;
      margin-bottom:15px;
    }
  }
  .contenPagination{
    margin-top:40px;
    display:flex;
    justify-content:flex-end;
    color:red;
    margin-bottom:40px;
  }
  .movies{
    display:grid;

    grid-template-columns: auto auto auto auto auto;
    min-height:900px;
    padding: 10px;

    overflow-y:scroll;
    ::-webkit-scrollbar{
      display:none;
    }
    @media(max-width:800px){
      grid-template-columns: auto auto auto;
    }
    @media(max-width:600px){
      grid-template-columns: auto;
      justify-content:center;
    }
   
  }
  
`;

export const ContentCategories = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    width:250px;
    padding:0 10px 0 10px;

    @media(max-width:1024px){
      div{
        display:grid;
        grid-template-columns: auto auto;
        padding:0px;
      }
    }
    @media(max-width:600px){
      div{
        display:grid;
        grid-template-columns: auto auto auto;
        padding:0px;
      }
    }
    
`;

export const ButtonGenre = styled.button`
  padding:10px 10px;
  background:transparent;
  border:none;
  outline:none;
  font-size:18px;
  text-align:start;
  border-bottom:2px solid transparent;
  color:rgba(255,255,255,0.7);
  border-radius:3px;
  transition:all 0.3s ;
  
  :hover{
    box-shadow: 0px 10px 20px 1px rgba(0, 0, 0, 0.1);
    color:rgba(255,255,255,1);
    /* border-bottom:2px solid var(--standardYellow); */
    background:#121E41;
  }
  margin-bottom:10px;
  cursor: pointer;
`;