import styled from 'styled-components';


interface props{
  width:string;
}

export const Container = styled.div<props>`
  height:1px;
  width:${props => props.width};
  background:rgba(255, 255, 255, 0.3);
`;
