import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTrendingMovies} from '../api/tmdb-api'
import AddToMustWatchIcon from '../components/cardIcons/addToMustWatch'


const TrendingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('trending', getTrendingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  return (
    <PageTemplate
      title="Trending Movies"
      movies={movies}
      action={(movie) => {
        return <AddToMustWatchIcon movie={movie}/>
      }}
    />    
  );
};

export default TrendingMoviesPage;