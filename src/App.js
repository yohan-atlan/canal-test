import React, { Component } from 'react';
import fetchMovies from './utils/fetchMovies'
import fetchSeries from './utils/fetchSeries'
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
    fetchMovies()
      .then(results => {
        this.setState({movies: results})
      })
      .catch(err => {
        console.log(err);
      });
  }
  getSeries() {
    fetchSeries()
      .then(results => {
        this.setState({series: results})
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="App-body">
          <div className="Movies-container">
            <button onClick={() => this.getMoovies()}>
              Fetch movies
            </button>
            <ul>
              {this.state.movies.map(function(movie, index){
                return <h1 key={index}>{movie.title}</h1>
              })}
            </ul>
          </div>
          <div className="Series-container">
            <button onClick={() => this.getSeries()}>
              Fetch series
            </button>
            <ul>
              {this.state.series.map(function(serie, index){
                return <h1 key={index}>{serie.name}</h1>
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
