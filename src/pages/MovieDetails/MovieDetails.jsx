import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { fetchMoviesDetails } from 'api/api';
import { NavLink, Link, useLocation } from 'react-router-dom';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    const getMovie = async () => {
      try {
        const results = await fetchMoviesDetails(id);

        setDetails(results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [id]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  console.log(location);
  return (
    <div>
      <Link to={backLink.current}>Go back</Link>
      <div>
        <img
          src={
            details.poster_path
              ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
              : defaultImg
          }
          alt={details.title}
          width={220}
          className={css.img}
        />
      </div>

      <div>
        <h1>{details.title}</h1>
        <p>{details.vote_average}</p>
        <h2>Overview</h2>
        <p>{details.overview}</p>
        <h3>Genres</h3>
        <ul>
          {details.genres &&
            details.genres.map(({ id, name }) => <li key={id}>{name}</li>)}
        </ul>
      </div>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
