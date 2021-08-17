export interface PropsMovies{
    id:number;
    title:string;
    overview:string;
    original_title:string;
    original_language:string;
    poster_path:string;
    backdrop_path:string;
    vote_average:number;
    genre_ids:number[];
    adult:boolean;
    release_date?:string;
    genres?:PropsGenres[];
    
}
export interface PropsMoviesForGenre{
    id:number;
    title:string;
    vote_average:number;
    poster_path:string;
}
export interface PropsResponseMovies{
    results:PropsMovies[];
    total_pages:number;
    total_results:number;
}
export interface PropsGenres {
    id: number;
    name: string;
}
