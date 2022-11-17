import { configureStore } from '@reduxjs/toolkit'
import movieReducer from "./movies/movieslice";

const store = configureStore({reducer:{
    movies: movieReducer
}})

export default store;