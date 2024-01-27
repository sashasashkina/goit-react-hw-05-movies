import axios from 'axios';

const KEY_API = '7147c2b6a7c9ae8aa16a2769484b1d62';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

axios.defaults.params = {
  api_key: KEY_API,
  language: 'en-US',

  include_adult: false,
};

async function fetchCast(id) {
  const response = await axios.get(`/movie/${id}/credits`);
  return response.data;
}

async function fetchReviews(id) {
  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data;
}

async function fetchMoviesDetails(id) {
  const response = await axios.get(`/movie/${id}`);
  return response.data;
}

async function fetchTrend() {
  const response = await axios.get('/trending/movie/day');
  return response.data;
}

async function searchMovies(query) {
  const response = await axios.get(`/search/movie?query=${query}`);
  return response.data;
}

export {
  fetchTrend,
  fetchMoviesDetails,
  fetchCast,
  fetchReviews,
  searchMovies,
};
