import React, { useCallback } from 'react';
import Card from '../../Components/Card';
import Layout from '../../Components/Layout';
import TopBar from '../../Components/TopBar';
import { useLocation } from "react-router-dom";
import { Banner, Container, Description, Poster, Overview, Cast, Actor } from './styles';
import { useEffect } from 'react';
import { api, backdropImage, posterUrlBase } from '../../services/Apiclient';
import { useState } from 'react';
import { PropsMovies, PropsResponseMovies } from '../../Utils/PropsMovies';
import InputSearch from '../../Components/InputSearch';
import SearchResults from '../../Components/SearchResults';
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';
import { MdClose } from 'react-icons/md';
interface PropsCast {

  adult: boolean,
  gender: number,
  id: number,

  name: string,
  original_name: string,
  popularity: number,
  profile_path: string,
  character: string,
  order: 0
}

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Details: React.FC = () => {
  const classes = useStyles();
  const searchurl = useLocation().search;
  const [cast, setCast] = useState<PropsCast[]>([]);
  const id = new URLSearchParams(searchurl).get('id');
  const [movie, setMovie] = useState<PropsMovies>();
  const [useBackdrop, setUseBackDrop] = useState(false);
  const [search, setSearch] = useState<boolean>(false);
  const [keySearch, setKeySearch] = useState("");
  const [searchData, setSearchData] = useState<PropsResponseMovies>({ total_pages: 1, results: [], total_results: 0 });
  let timer: any;
  let newtimer: any;

  useEffect(() => {
    api.get(`movie/${id}`).then(Response => setMovie(Response.data));
    api.get(`movie/${id}/credits`).then(Response => setCast(Response.data.cast))
  }, []);
  const handles = useCallback((search) => {


    const { value } = search;
    if (value) {
      setKeySearch(value[0].toUpperCase() + value.substr(1));
    }

    clearTimeout(timer);
    timer = setTimeout(() => {
      setUseBackDrop(true);
      newtimer = setTimeout(() => {
        api.get(`search/movie?query=${value}`).then(response => setSearchData(response.data));
        setUseBackDrop(false);
        setSearch(true);
      }, 2000);


    }, 2000);

  }, []);
  return (
    <Layout>
      <Backdrop open={useBackdrop} className={classes.backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <TopBar>
        <InputSearch width={200} onInput={(value) => handles(value?.target)} placeholder="Pesquisar" />
      </TopBar>
      {search && keySearch.length > 0
        && <SearchResults data={searchData} keySearch={keySearch} >
          <button onClick={() => setSearch(false)} ><MdClose size={30} color={"#ffff"} /></button>
        </SearchResults>}
      <Container>
        <Banner banner={backdropImage + movie?.backdrop_path} >
          <Poster poster={posterUrlBase + movie?.poster_path} />
        </Banner>
        <Description>
          <h1>{movie?.title}</h1>
          <strong>{movie?.release_date + " " + movie?.genres?.map((item) => " " + item.name)}</strong>
          <strong>TMDB {movie?.vote_average}/10</strong>
        </Description>
        <Overview>
          <strong>{movie?.overview}</strong>
        </Overview>
        <Cast>
          {cast.length > 0 && cast.map((actor) => actor.popularity >= 10 && actor.profile_path && <Actor><img src={posterUrlBase + actor.profile_path} /><strong>{actor.name}</strong></Actor>)}

        </Cast>
      </Container>


    </Layout>
  );


}

export default Details;