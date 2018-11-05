import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state: State = {
      movies: [],
      series: []
  };
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      series: []
    }
  }
  getMoovies() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=92b418e837b833be308bbfb1fb2aca1e&language=en-US&page=1')
    .then(results => {
        return results.json()
    })
    .then(results => {
      this.setState({movies: results.results})
    })
  }
  getSeries() {
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=92b418e837b833be308bbfb1fb2aca1e&language=fr-FR&page=1')
    .then(results => {
        return results.json()
    })
    .then(results => {
      this.setState({series: results.results})
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => this.getMoovies()}>
            Fetch movies
          </button>
          <button onClick={() => this.getSeries()}>
            Fetch series
          </button>
          <ul>
            {this.state.movies.map(function(movie, index){
              return <h1 key={index}>{movie.title}</h1>
            })}
          </ul>
          <ul>
            {this.state.series.map(function(serie, index){
              return <h1 key={index}>{serie.name}</h1>
            })}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
