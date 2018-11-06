import React, { Component } from 'react';
import List from './components/List'
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
          <div className="Movies-container">
            <button onClick={() => this.getMoovies()}>
              Découvrir les films
            </button>
            <List list={this.state.movies}></List>
          </div>
          <div className="Series-container">
            <button onClick={() => this.getSeries()}>
              Découvrir les series
            </button>
            <List list={this.state.series}></List>
            {/* <ul>
              {this.state.series.map(function(serie, index){
                return <h1 key={index}>{serie.name}</h1>
              })}
            </ul> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
