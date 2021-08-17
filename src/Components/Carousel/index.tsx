import React, { useEffect } from 'react';

import { Container, Title, CarouselObj } from './styles';

import {PropsMovies} from '../../Utils/PropsMovies';
import { useState } from 'react';
import { api, posterUrlBase } from '../../services/Apiclient';
import CardCarousel from '../CardCarousel';
interface props {
    title: string;
    data: PropsMovies[];
}

const Carousel: React.FC<props> = ({ title, data }) => {

    useEffect(()=>{console.log(data)},[data])

    return (
        <Container>
            <Title>{title}</Title>
            <CarouselObj>
                {data.length > 0  && data.map((movie) => <CardCarousel urlImg={posterUrlBase + movie.poster_path} />)}
            </CarouselObj>
        </Container>
    );
}

export default Carousel;