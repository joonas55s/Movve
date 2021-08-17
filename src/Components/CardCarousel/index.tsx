import React from 'react';
import Card from '../Card';

import { Container,OverLay,Content } from './styles';

interface props{
  urlImg:string;
  useOverlay?:boolean;
  height?:number;
  width?:number;
}
const CardCarousel: React.FC <props> = ({urlImg,useOverlay = true,width,height}) => {
  return (
      <Container >
        <Card id={0} urlImg={urlImg}/> 
        <Content>
           
        </Content>
      </Container>
    );
}

export default CardCarousel;