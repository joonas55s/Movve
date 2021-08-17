import React, { useCallback, useState,useEffect} from 'react';
import { Content } from './styles';
import utf8 from 'utf8';
import BannerHome from '../../Components/BannerHome';
import Layout from '../../Components/Layout';
import { api } from '../../services/Apiclient';

import { PropsMovies, PropsResponseMovies } from '../../Utils/PropsMovies';
import MoviesCategorie from '../../Components/MoviesCategorie';
import TopBar from '../../Components/TopBar';
import {CircularProgress,Backdrop, makeStyles} from '@material-ui/core';
import InputSearch from '../../Components/InputSearch';
import SearchResults from '../../Components/SearchResults';
import { MdClose } from 'react-icons/md';


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Home: React.FC = () => {
  const location =  utf8.encode(window.location.href);
  const [top_rated, setTop_rated] = useState<PropsMovies[]>([]);
  const classes = useStyles();
  const [search, setSearch] = useState<boolean>(false);
  const [searchData, setSearchData] = useState<PropsResponseMovies>({ total_pages: 1, results: [], total_results: 0 });
  const [keySearch, setKeySearch] = useState("");
  const [useBackdrop,setUseBackDrop] = useState(false);
  let timer: any;
  let newtimer:any;

  useEffect(() => {
    api.get('movie/top_rated').then(response => setTop_rated(response.data.results));
  }, []);

  useEffect(()=>{
    if(location.indexOf('#') > -1){
      window.location.href ="#" + location.split("#")[1];
    }
  },[top_rated]);
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
      <TopBar>
        <InputSearch width={200} onInput={(value) => handles(value?.target) }  placeholder="Pesquisar" /> 
      </TopBar>

      
      <Backdrop open={useBackdrop} className={classes.backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {search && keySearch.length > 0  
        && <SearchResults data={searchData} keySearch={keySearch} >
            <button onClick={()=>setSearch(false)} ><MdClose size={30} color={"#ffff"} /></button>
          </SearchResults>}

      <Content >
        <BannerHome/>
        <div className={keySearch.length > 0 && search ? 'hideme':'' }>
          <MoviesCategorie></MoviesCategorie>
        </div>
        
      </Content>
    </Layout>

  );
}

export default Home;