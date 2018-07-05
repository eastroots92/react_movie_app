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
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
    })
    .catch((error) => {
      console.log(error)
    })
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
