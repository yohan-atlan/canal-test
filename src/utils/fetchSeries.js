// @flow
import { API_KEY } from "../core/constants";

const fetchSeries = (page) => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=fr-FR&page=${page}`)
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

export default fetchSeries;
