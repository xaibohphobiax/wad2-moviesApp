import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; // NEW
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import NowPlayingMoviesPage from "./pages/nowPlayingMoviesPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import TrendingMoviesPage from "./pages/trendingMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import MovieCreditPage from "./pages/movieCreditPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />      {/* New Header  */}
        <MoviesContextProvider>
            {" "}
          <Switch>
            <Route exact path="/trending" component={TrendingMoviesPage} />
            <Route exact path="/movies/popular" component={PopularMoviesPage} />
            <Route exact path="/movies/now_playing" component={NowPlayingMoviesPage} />
            <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
            <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
            <Route path="/movies/:id" component={MoviePage} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/reviews/form" component={AddMovieReviewPage} />
            <Route path="/reviews/:id" component={MovieReviewPage} />
            <Route path="/credits/:id" component={MovieCreditPage} />
            
            <Redirect from="*" to="/" />
          </Switch>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));