// import css from './Cast.module.css';
import { fetchCast } from 'api/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    const getCast = async () => {
      try {
        const results = await fetchCast(id);
        setCast(results.cast);
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, [id]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <div>
      {cast.length === 0 && <p>No cast</p>}
      <ul>
        {cast.map(({ name, id, character, profile_path }) => {
          return (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : defaultImg
                }
                alt={name}
                width={220}
              />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Cast;
