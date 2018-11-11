import React, { Component } from 'react';
import Container from './components/Container'
import fetchMovies from './utils/fetchMovies'
import fetchSeries from './utils/fetchSeries'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      series: [],
      moviePage: 1,
      seriePage: 1,
      movieClicked: false,
      serieClicked: false
    }
  }
  getMovies(page) {
    fetchMovies(page)
      .then(results => {
        this.setState({ movies: results, movieClicked: true })
      })
      .catch(err => {
        console.log(err);
      });
  }
  getSeries(page) {
    fetchSeries(page)
      .then(results => {
        this.setState({ series: results, serieClicked: true })
      })
      .catch(err => {
        console.log(err);
      });
  }
  nextPage = (type) => {
    if (type === 'movie'){
      this.setState({moviePage: this.state.moviePage + 1}, function () {
        this.getMovies(this.state.moviePage);
      });
    } else if (type === 'serie') {
      this.setState({seriePage: this.state.seriePage + 1}, function () {
        this.getSeries(this.state.seriePage);
      });
    }
  };
  prevPage = (type) => {
    if (type === 'movie'){
      if (this.state.moviePage > 1) {
        this.setState({moviePage: this.state.moviePage - 1}, function () {
          this.getMovies(this.state.moviePage);
        });
      }
    } else if (type === 'serie') {
      if (this.state.seriePage > 1) {
        this.setState({seriePage: this.state.seriePage - 1}, function () {
          this.getSeries(this.state.seriePage);
        });
      }
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="App-body">
          <Container fetchType={() => this.getMovies()} list={this.state.movies} nextPage={() => this.nextPage('movie')}prevPage={() => this.prevPage('movie')} type="movie" clicked={this.state.movieClicked}></Container>
          <Container fetchType={() => this.getSeries()} list={this.state.series} prevPage={() => this.prevPage('serie')}nextPage={() => this.nextPage('serie')} type="serie" clicked={this.state.serieClicked}></Container>
        </div>
      </div>
    );
  }
}

export default App;
