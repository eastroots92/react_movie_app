import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Zootopia",
    poster: "https://images-na.ssl-images-amazon.com/images/I/81nEtdN0f9L._SY606_.jpg"
  },
  {
    title: "Toy Story",
    poster: "https://i.pinimg.com/originals/59/82/e3/5982e3ae9bfb8a7f1f1491c75af69590.jpg"
  },
  {
    title: "UP",
    poster: "https://de1imrko8s7v6.cloudfront.net/movies/posters/up_1391712397.jpg"
  },
  {
    title: "WALL-E",
    poster: "https://images-na.ssl-images-amazon.com/images/I/51RoZRgIHtL.jpg"
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          movies.map((movie, index) => {
            return <Movie title={movie.title} poster={movie.poster} key={index} />
          })
        }
      </div>
    );
  }
}

export default App;
