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
    this._getMovies()
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return <Movie 
                title={movie.title_english} 
                poster={movie.medium_cover_image} 
                key={movie.id} 
                genres={movie.genres} 
                synopsis={movie.synopsis} />
    })
    return movies
  }
  
  _getMovies = async () => {
    // await는 callApi가 끝나길 기다리는 명령어.
    // async는 비동기 
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then((response) => response.json())
    .then((json) => json.data.movies)
    .catch((error) => console.log(error))
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "app" : "app-loading"}>
        {this.state.movies ? this._renderMovies() : "Loading..."}
      </div>
    );
  }
}

export default App;
