import styled from 'styled-components';

export const Container = styled.div`
  
 
  grid-area: TB;
  display: flex;
  width: 100%;
  flex-direction:column;
 
  align-items:center;
 
  justify-content:space-between;
  
  z-index: 99;
  .navBar{
    
    height: 80px;
    font-family: 'Raleway', sans-serif;
    display: flex;
    width:100%;
    align-items:center;
    justify-content:space-between;
    padding:10px 30px;
    @media(max-width:600px){
      padding:0 10px;
      justify-content:center;
    }
  }
  .navBar .leftSide{
    display:flex;
    flex: 50%;
    justify-content: space-between;
    align-items: center;
    
  }

  .navBar .leftSide .links{
    display: flex;
    max-height: 60px;
    flex-direction: row;
    align-items: center;
    text-align:center;

   a{
      color: white;
      font-size:25px;
      text-decoration:none;
      text-align:center;
      height: 25px;
      margin-left: 15px;
    }
    
    button{
      color: white;
      font-size:18px;
      text-decoration:none;
      text-align:center;
      height: 35px;
      margin-left: 15px;
      background:transparent;
      border:none;
      outline:none;
      cursor: pointer;
      border-bottom:4px solid transparent;
      transition: border-bottom 0.2s;
      
      :hover{
        border-bottom:4px solid #FFBD59;
      }
    }
  }

  .navBar .leftSide .links a :hover{
      border-bottom: 3px solid orange;
  }
  

  .navBar .leftSide .links  img{
      width:120px;
      height:60px;

      /* margin-right: 50px;mexi */ 

    }

  .navBar .leftSide .miniBar{
    display:none;
    
  }
  .navBar .leftSide .miniBar img{
      width: 45px;
      height: 40px;
    }

  .navBar .leftSide #hidden{
    display:flex;
  }

  .navBar .rightSide{
    flex:50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-left:10px;

  }
  @media only screen and (max-width: 850px){
    .navBar .leftSide .links button{
      font-size:15px;
    }
    
  }

  @media only screen and (max-width: 750px){
    .navBar .leftSide .links button{
      /* font-size:18px; */
    }

  }

  @media only screen and (max-width: 650px){
   
    .navBar .leftSide .links img{
      display:none;
    }

    .navBar .leftSide .miniBar{
      display:flex;
      flex:1;
      background-color: transparent;
      border: none;
      flex-direction: row;
      justify-content:flex-start;
      padding-right:10px;
      img{
        margin-right:10px;
      }
      >button{
        margin-left:10px;
        background:transparent;
        border:none;
        outline:none;
      }
    }
    .navBar .leftSide .minibar button :hover{
      color: yellow;
    }
    .navBar .leftSide .minibar button {
      background: transparent;
    }

    .navBar .leftSide .links{
      display:none;
    }

    .navBar .leftSide  #hidden{
      position: absolute;
      left:0px;
      top:80px;
      height: 230px;
      max-height: 230px;
      width:100%;
      background-color: rgba(		15,	24,	51, 0.9);
      display: flex;
      flex-direction: column;
      align-items:center;

      justify-content:center;
      button{
        font-size:20px;
      }
      button+button{
        margin-bottom:10px;
      }

    }

    .navBar .leftSide #hidden a{
      margin:10px;
     font-size: 25px;
      
    }
  }

`;