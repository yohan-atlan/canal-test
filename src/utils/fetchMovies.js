// @flow
import { API_KEY } from "../core/constants";

const fetchMovies = () => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then(payload => {
        return payload.json();
      })
      .then(data => {
        if (data.results.length === 0) {
          reject(data);
        } else {
          resolve(data.results);
        }
      });
  });
};

export default fetchMovies;
