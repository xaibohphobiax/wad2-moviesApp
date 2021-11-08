// import React, { useState, useEffect } from "react";
// import PageTemplate from "../components/templateMoviePage";
// import { getUpcomingMovies } from "../api/tmdb-api";


// const UpcomingMoviesPage = (props) => {
//     const [upcomingmovies, setUpcomingMovies] = useState([]);
  
//     useEffect(() => {
//       getUpcomingMovies().then(upcomingmovies => {
//         setUpcomingMovies(upcomingmovies);
//       });
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);
  
//     return (
//       <PageTemplate
//         title='Discover Upcoming Movies'
//         upcomingmovies={upcomingmovies}
//       />
//     );
//   };
//   export default UpcomingMoviesPage;

import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getUpcomingMovies} from '../api/tmdb-api'


const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  return (
    <PageTemplate
      title="Discover Upcoming Movies"
      movies={movies}
    />    
  );
};

export default UpcomingMoviesPage;