import React, { HtmlHTMLAttributes, InputHTMLAttributes } from 'react';

import { Container } from './styles';
import {FiSearch} from 'react-icons/fi';

interface Props extends HtmlHTMLAttributes<HTMLInputElement>{
  height?:number;
  width?:number;

}
const InputSearch: React.FC <Props> = ({height,width,...rest}) => {
  return (
  <Container height={height} width={width}>

    <input {...rest} ></input>
    <FiSearch size={22}/>
  </Container>
  );
}

export default InputSearch;