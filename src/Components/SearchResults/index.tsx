import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { api, posterUrlBase } from '../../services/Apiclient';
import { PropsGenres, PropsResponseMovies } from '../../Utils/PropsMovies';
import Card from '../Card';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Content, ContentCategories, ButtonGenre } from './styles';
import SecondInputSearch from '../SecondInputSearch';


interface Props {
    data: PropsResponseMovies;
    keySearch?: string;
}
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiPaginationItem-root': {
            marginTop: theme.spacing(1),
            color: "#fff",
            bordercolor: '#ffffff5e'

        },
    },
}));

interface PropsFindGenres {
    name: string;
    amount?: Number;
}
interface PropsMethodSearch {
    tipo: "genre" | "general" | "ingenres";
}
const SearchResults: React.FC<Props> = ({ data, keySearch, children }) => {
    const [genres, setGenres] = useState<PropsGenres[]>([]);
    const [movies, setMovies] = useState<PropsResponseMovies>();
    const classes = useStyles();
    const [page, setPage] = useState(1);
    const [selectedGenre, setSelectedGenre] = useState<number>();

    const [findInGenre, setFindInGenre] = useState<PropsFindGenres>();
    const [searchMethod, setSearchMethod] = useState<PropsMethodSearch>();
    const [genreSearch,setGenreSearch] = useState("");


    useEffect(() => {

        api.get('genre/movie/list?').then(response => setGenres(response.data.genres));
    }, [])
    const handleChange = (event: any, value: React.SetStateAction<number>) => {
        setPage(value);
    };
    const ClickGenre = useCallback((idGenre,name) => {
        setSelectedGenre(idGenre);
        setSearchMethod({tipo:"genre"});
        setGenreSearch(name);
        api.get(`discover/movie?with_genres=${idGenre}&page=${page}`).then(response => setMovies(response.data));
    
    }, [])
    useEffect(() => {
        setSearchMethod({ tipo: "general" });
    }, [keySearch])
    useEffect(() => {
        setMovies(data)
    }, [data])
    useEffect(() => {
        if (page > 1) {
            api.get(`discover/movie?with_genres=${selectedGenre}&page=${page}`).then(response => setMovies(response.data));
        }
    }, [page])

    const handles = useCallback((search) => {
        setSearchMethod({ tipo: "ingenres" });
        const { value } = search;
        let uper = value.toUpperCase()

        setFindInGenre({ name: uper, amount: 0 });
        const results = movies?.results.filter((movie) => movie.title.toUpperCase() === value.toUpperCase())

        if (results?.length! >0) {
            setFindInGenre({ name: uper, amount: results?.length });
            console.log(uper);
        } else {

            console.log("nenhum filme encontrado");
        }


    }, [movies]);


    return (
        <Container>
            <ContentCategories>
                <h2>Categorias</h2>
                <div>
                    {genres.length > 0 && genres.map((genre) => <ButtonGenre onClick={() => ClickGenre(genre.id,genre.name)}>{genre.name}</ButtonGenre>)}
                </div>
            </ContentCategories>
            <Content>
                <div className="header">
                    <div className="controls">
                        {children}
                    </div>
                    <div>
                        <h2>Resultados da busca por: {searchMethod?.tipo == "general" && keySearch}{searchMethod?.tipo == "genre" && genreSearch} </h2>
                        {selectedGenre && <SecondInputSearch onInput={(value) => handles(value?.target)} width={250} />}
                    </div>
                
                    <strong>Encontrados: {searchMethod?.tipo == "general" && movies?.total_results}{searchMethod?.tipo == "ingenres" && findInGenre?.amount}</strong>
                </div>
                <div className="movies">
                    {searchMethod?.tipo == "general" && movies?.results.length! > 0 && movies?.results.map((movies) => movies.poster_path && <Card id={movies.id} urlImg={posterUrlBase + movies.poster_path} />)}
                    {searchMethod?.tipo == "genre" && movies?.results.length! > 0 && movies?.results.map((movies) => movies.poster_path && <Card id={movies.id} urlImg={posterUrlBase + movies.poster_path} />)}
                    {searchMethod?.tipo == "ingenres" && movies?.results.map((movies) => movies.title.toUpperCase() === findInGenre?.name && movies.poster_path && <Card id={movies.id} urlImg={posterUrlBase + movies.poster_path} />)}
                    {searchMethod?.tipo == "ingenres" && findInGenre?.amount ==0 &&<h1>Nenhum resultado encontrado</h1>}
                </div>
                <div className="contenPagination">
                    <div className={classes.root}>
                        <Pagination count={movies?.total_pages} page={page} onChange={handleChange} color="primary" variant="outlined" />
                    </div>
                </div>
            </Content>
        </Container>
    );
}

export default SearchResults;