import React from 'react';

import { Container, CategoriName, Row, ListMovies } from './styles';
import { api, posterUrlBase } from '../../services/Apiclient';
import {PropsMovies,PropsGenres, PropsMoviesForGenre} from '../../Utils/PropsMovies';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../Card';
import LineDivider from '../LineDivider';
import { useRef } from 'react';


interface PropsMovieWithGenres {
    genreid: number;
    results: PropsMoviesForGenre[];
}

const MoviesCategorie: React.FC = () => {
    const [genres, setGenres] = useState<PropsGenres[]>([]);
    const [movies, setMovies] = useState<PropsMovieWithGenres[]>([]);

  

    useEffect(() => {
        api.get('genre/movie/list').then(response => setGenres(response.data.genres));
    }, [])

    useEffect(() => {
        genres.map((genre) => {
            api.get(`discover/movie?with_genres=${genre.id}`).then(response => setMovies(movies=>[...movies,{ genreid: genre.id, results: response.data.results }]));
        })
    }, [genres])

    return (
        <Container>
            {genres.length > 0 && genres.map((genre) =>
                <Row>
                    <div>
                        <CategoriName id={genre.name}>{genre.name}</CategoriName>
                        <LineDivider width="90%"></LineDivider>
                    </div>
                    <ListMovies>
                        {movies.length > 0 &&

                            movies.map((movie) => {
                                
                                if (movie.genreid == genre.id) {
                                    return (movie.results.map((item) => <Card title={item.title} vote_average={item.vote_average} id={item.id}   urlImg={posterUrlBase + item.poster_path} />))
                                }
                            })
                        }
                    </ListMovies>
                </Row>
            )}
        </Container>
    );
}

export default MoviesCategorie;