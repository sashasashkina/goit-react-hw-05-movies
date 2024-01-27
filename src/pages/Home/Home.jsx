import { useState, useEffect } from 'react';

import css from './Home.module.css';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchTrend } from 'api/api';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { results } = await fetchTrend();
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  return (
    <div className="container">
      <h1 className={css.main_title}>Trending today</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
