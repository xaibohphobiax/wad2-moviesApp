import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getNowPlayingMovies} from '../api/tmdb-api'
//import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd'
import AddToMustWatchIcon from '../components/cardIcons/addToMustWatch'


const NowPlayingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('now_playing', getNowPlayingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  return (
    <PageTemplate
      title="Now playing Movies"
      movies={movies}
      action={(movie) => {
        return <AddToMustWatchIcon movie={movie}/>
      }}
    />    
  );
};

export default NowPlayingMoviesPage;