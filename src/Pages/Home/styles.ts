import styled from 'styled-components';

export const Content = styled.div`
    grid-area:CO;
    display:flex;
    flex-direction:column;
    padding:0 40px 10px 40px;

    height:auto;
    margin-top:0px;

    .hideme{
        display:none;
    }
    @media(max-width:500px){
        padding:0 20px 10px 20px;
    }
`;
