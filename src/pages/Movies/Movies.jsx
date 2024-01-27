// import css from './Movies.module.css';
import { searchMovies } from 'api/api';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const query = searchParams.get('query');

    if (!query) return;
    const getSearchMovies = async () => {
      try {
        const { results } = await searchMovies(query);

        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    getSearchMovies();
  }, [searchParams]);

  return (
    <div>
      <SearchBar />
      <MoviesList movies={movies} />
    </div>
  );
};
export default Movies;
