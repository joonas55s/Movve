import React from 'react';
import StarRating from '../StarRating';
import { Container, OverLay, Content, Poster, Extras } from './styles';

interface props {
  id: number;
  title?: string;
  vote_average?: number;
  urlImg: string;
  useOverlay?: boolean;
  height?: number;
  width?: number;
  path?: string;
}
const Card: React.FC<props> = ({ urlImg, title, vote_average, id, path = "details", useOverlay = true, width, height }) => {

  function OpenDetails(id: number) {
    window.location.href = `/details?id=${id}`;
  }
  return (
    <Container height={height} width={width}>
      <Poster>
        <Content urlImg={urlImg}>
          <button onClick={() => OpenDetails(id)} >Ver</button>
          {useOverlay && <OverLay  />}
        </Content>
      </Poster>
      <Extras>
        {title && <strong>{title}</strong>}
        <div>
          {vote_average && <strong className="note">{vote_average != 0 && vote_average}{vote_average == 0 && "Sem Nota"}</strong>}
          {vote_average && <StarRating note={vote_average / 2} />}
        </div>
        
      </Extras>
    </Container>
  );
}

export default Card;