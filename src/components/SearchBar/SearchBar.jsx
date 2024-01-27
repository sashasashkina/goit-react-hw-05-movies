import { useSearchParams } from 'react-router-dom';
import css from './SearchBar.module.css';
import { useState } from 'react';
import React from 'react';

export const SearchBar = () => {
  const [value, setValue] = useState('');
  const [setSearchParams] = useSearchParams();

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
          <span className={css.label}>Search</span>
        </button>

        <input
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
