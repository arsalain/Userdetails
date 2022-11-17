import React, { useEffect } from 'react';
import Movie from '../Movielisting/Movie';
import { useDispatch } from "react-redux";
import "./Home.css"
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../redux/movies/movieslice"

const Home = () => {
    const dispatch = useDispatch();
    const movieText = "Harry";
    const showText = "Friends";
    useEffect(() => {
      dispatch(fetchAsyncMovies(movieText));
      dispatch(fetchAsyncShows(showText));
    }, [dispatch]);
    return (
        <div className="banner">
        <Movie />
      </div>
    );
};

export default Home;