import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateUpcomingMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";


const UpcomingMoviesPage = (props) => {
    const [upcomingmovies, setUpcomingMovies] = useState([]);
  
    useEffect(() => {
      getUpcomingMovies().then(upcomingmovies => {
        setUpcomingMovies(upcomingmovies);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
      <PageTemplate
        title='Discover Upcoming Movies'
        upcomingmovies={upcomingmovies}
      />
    );
  };
  export default UpcomingMoviesPage;