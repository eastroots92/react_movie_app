import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  /* React Lifecycle */
  // 핵심 : Component는 많은 function을 가지고 있고 해당 function은 순서대로, 자동으로 작동된다.

  // Render: componentWillMount() -> render() -> componentDidMount()
  // 위 3가지는 컴포넌트가 '존재'하기 시작할 때 작동된다.
  // 이를 활용하면 jQuery에서 windows.ready doc.ready 등등처럼 활용 가능하다.

  // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  // componentWillReceiveProps()에서 기존에 컴포넌트를 확인한다.
  // shouldComponentUpdate()에서 변경될 컴포넌트를 확인 훌 차이점이 있는지 확인하다. 있으면 '== true'라고 생각하게 된다.
  // componentWillUpdate(), render(), componentDidUpdate() 이 3개는 Render에 관련된 내용임

  state = {
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
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
          {
            title: "FROZEN",
            poster: "https://is1-ssl.mzstatic.com/image/thumb/Video122/v4/26/15/25/261525be-76a6-3fd4-06a3-db858ab55137/source/1200x630bb.jpg"
          },
        ]
      })
    }, 2000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading..."}
      </div>
    );
  }
}

export default App;
