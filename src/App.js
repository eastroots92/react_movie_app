import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Zootopia",
  "Toy Story",
  "UP",
  "WALL-E"
]

const moviePosters = [
  "https://images-na.ssl-images-amazon.com/images/I/81nEtdN0f9L._SY606_.jpg",
  "https://i.pinimg.com/originals/59/82/e3/5982e3ae9bfb8a7f1f1491c75af69590.jpg",
  "https://de1imrko8s7v6.cloudfront.net/movies/posters/up_1391712397.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51RoZRgIHtL.jpg"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={moviePosters[0]} />
        <Movie title={movieTitles[1]} poster={moviePosters[1]} />
        <Movie title={movieTitles[2]} poster={moviePosters[2]} />
        <Movie title={movieTitles[3]} poster={moviePosters[3]} />
      </div>
    );
  }
}

export default App;
