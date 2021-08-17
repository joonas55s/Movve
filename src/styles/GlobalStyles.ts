import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle `

*{
padding:0;
margin:0;
box-sizing:border-box;
}
body, html, #root{
  scroll-behavior: smooth;
  height:100%;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  background-size:100%;
  background-repeat:no-repeat, repeat, repeat;
  background:#0C1227 radial-gradient(100% 100% at 50% 0%, #131F44 0%, #0C1227 99.99%, #0C1227 100%);
  height:auto;
  ::-webkit-scrollbar {
    width: 17px;
    
    }
    /* Track */
    ::-webkit-scrollbar-track {
    background:#070b1b; 
    border-radius:5px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background:#17244e; 
        border-radius:50px;
        border:3px solid #070b1b;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background:#253b81; 
    }
   
  }
strong,h1,h2,h3{
  -webkit-font-smoothing: antialiased;
  font-family: 'Raleway', sans-serif;
}
:root{
  --background: #121518;
  --backgroundBold: #0C0B10;
  --border:#222529;
  --standardYellow:#FFBD59;

}

`;