import styled from 'styled-components';

interface Props{
  banner?:string;
  poster?:string;
}


export const Container = styled.div`
grid-area:CO;
 display:flex;
 flex-direction:column;
 padding:10px 45px;
 @media(max-width:600px){
  padding:10px 0px;
 }
`;

export const Poster = styled.div<Props>`

  position: absolute;
  width: 250px;
  height: 350px;
  left: 32px;
  top: 380px;

  background:url(${props=> props.poster});
  background-size:cover;
  box-shadow: -4px 0px 30px 15px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

`;
export const Description = styled.div`
  padding-left:250px;
  display:flex;
  flex-direction:column;
  margin-top:20px;
  h1{
    font-style: normal;
    font-weight: bold;
    font-size: 45px;
    line-height: 56px;
    letter-spacing: 0.085em;
    text-transform: uppercase;
    color: #FFFFFF;
  }
  color:white;
  strong{
    margin-top:10px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    letter-spacing: 0.085em;
    text-decoration-line: underline;
    text-transform: uppercase;
  }
  @media(max-width:600px){
    padding:0 10px 0 10px;
    margin-top:200px;
    h1{
      font-size: 30px;
    }
    strong{
      font-size: 18px;
    }
  }
`;
export const Overview = styled.div`

  color:#ffff;
  margin-top:80px;
  font-family: 'Raleway';
  font-weight: 100;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.085em;
  text-transform: initial;
  @media(max-width:600px){
    padding:0 10px 0 10px;
    font-size: 10px;
  }
`;
export const Cast = styled.div`
  display:flex;
  height:400px;
  justify-content:center;
  align-items:center;
  margin-bottom:40px;

  @media(max-width:600px){
    overflow-x:scroll;
    justify-content:flex-start;
    padding:0;
    ::-webkit-scrollbar{
      display:none;
    }
  }
`;

export const Banner = styled.div<Props>`
  
  background-image: url(${props=>props.banner});
  background-repeat:no-repeat;
  background-size: cover;
  width: 100%;
  height: 70vh;
  @media(max-width:600px){
    background-position:center;
  }
`;

export const Actor = styled.div`
  display:flex;
  flex-direction:column;
  margin-left:5px;
  min-width: 130px;
  max-width: 180px;
  height: 195px;
  background:red;
  justify-content:space-between;
  strong{
    margin-top:5px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.085em;
    text-transform: uppercase;
    

    color: #FFFFFF;
  }


`;