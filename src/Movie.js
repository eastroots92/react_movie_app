import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
    return (
      <div>
        <MoviePoster />
        <h1>Hello this is a Movie</h1>
      </div>
    )
  }
}

class MoviePoster extends Component {
  render() {
    return (
      <img src="https://images-na.ssl-images-amazon.com/images/I/81nEtdN0f9L._SY606_.jpg" />
    )
  }
}



export default Movie;