import React from 'react';

import { Container } from './styles';



interface props{
  width:string;
}
const LineDivider: React.FC <props> = ({width}) => {
  return <Container width={width} />;
}

export default LineDivider;