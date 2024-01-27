import css from './MoviesList.module.css';

import { NavLink, useLocation } from 'react-router-dom';
import React from 'react';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const listMovies = movies.map(({ id, title, poster_path }) => (
    <li key={id} className={css.item}>
      <NavLink
        state={{ from: location }}
        to={`/movies/${id}`}
        className={css.navLink}
      >
        <div className={css.containerHome}>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : defaultImg
            }
            alt={title}
            width={220}
          />
          <p className={css.text}>{title}</p>
        </div>
      </NavLink>
    </li>
  ));
  return <ul className={css.list}>{listMovies}</ul>;
};
