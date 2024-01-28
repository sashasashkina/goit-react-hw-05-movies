import { useSearchParams } from 'react-router-dom';
import css from './SearchBar.module.css';
import { useState } from 'react';
import React from 'react';

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get('query'));

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query: value });
  };

  const handleSearch = e => {
    setValue(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <button type="submit" className={css.button}>
          <span className={css.button}>Search</span>
        </button>

        <input
          className={css.title}
          onChange={handleSearch}
          value={value}
          type="text"
          placeholder="Search movies"
          required
          name="search"
        />
      </form>
    </div>
  );
};
