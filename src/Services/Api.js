import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '3a48e749c4f2715bcdedf4e4901d61a1';

export const getTrendingMovies = async () => {
  const res = await axios.get(`trending/all/day?api_key=${KEY}`);
  return res.data;
};

export const getMovieById = async id => {
  const res = await axios.get(`movie/${id}?api_key=${KEY}&language=en-US`);
  return res.data;
};

export const getMoviesByQuery = async query => {
  const res = await axios.get(
    `search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return res.data.results;
};

export const getCast = async movieId => {
  const res = await axios.get(
    `movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  return res.data.cast;
};

export const getReviews = async id => {
  const { data } = await axios.get(
    `movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return data.results;
};
