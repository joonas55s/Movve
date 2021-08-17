import styled from 'styled-components';

interface props{
  url:string;
}
export const Container = styled.div<props>`
  display:flex;
  flex:1;
  margin: 0px;
  margin-bottom: 30px;
  background:url(${props=> props.url});
  background-position:center;
  background-size:cover;
  background-repeat:no-repeat;

`;
export const Banner = styled.div`
  height:70vh;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  padding:0 50px;
  background:linear-gradient(360deg, rgba(16, 25, 54, 1) 15px, rgba(16, 25, 54, 0.1) 40%); 
  color: white;
  
  width:100%;
  strong{
    margin-top: 150px;
    font-size: 20px;
    width: 35vw;
  }
  button{
    margin-top: 40px;
    display: flex;
    justify-content: center;
    background-color:rgba(255, 189, 89, 0.4);
    border:4px solid rgba(223, 134, 0, 1);
    border-radius: 50px;
    height: 45px;
    color:white;
    width: 200px;
    align-items: center;
    font-weight: bold;
    font-size: 17px;
    box-shadow: 5px 5px 14px 1px rgba(0,0,0,0.5);
    transition: background-color 0.3s;
    cursor: pointer;
    :hover{
      background-color:rgba(255, 189, 89, 0.8);
    border:4px solid rgba(223, 134, 0, 0.8);

      

    }

  }

  @media(max-width:600px){
    strong{
      margin-top: 80px;
    font-size: 15px;
    width: 45vw;
    }
  }
`;
