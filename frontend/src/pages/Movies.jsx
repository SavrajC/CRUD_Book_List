/*
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Movies() {
    const [movies, getMovies] = useState('');
    const url = 'https://api.kanye.rest';

    useEffect(() => {
        getAllMovies();
    }, [])
    const getAllMovies = () => {
        axios.get(`${url}past`)
        .then((response) => {
            const allMovies = response.data.movies.allMovies
            getMovies(allMovies);
        })
        .catch(error => console.error(`Error: ${error}`));
    }

  return (
    <MovieTimeline movies={movies} />
  )
}
*/
