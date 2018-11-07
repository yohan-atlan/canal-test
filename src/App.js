import React, { Component } from 'react';
import Container from './components/Container'
import fetchMovies from './utils/fetchMovies'
import fetchSeries from './utils/fetchSeries'
import './App.css';

class App extends Component {
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
          <Container fetchType={() => this.getMoovies()} list={this.state.movies} type="movie"></Container>
          <Container fetchType={() => this.getSeries()} list={this.state.series} type="serie"></Container>
        </div>
      </div>
    );
  }
}

export default App;
