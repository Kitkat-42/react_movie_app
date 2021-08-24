// import React from "react";
// import axios from "axios";
// import Movie from "./movie";
// import "./App.css";

// class App extends React.Component {
//   //class component 만들기. 반드시 React.Component 로 만들어야 한다. 이 안에 state, render 등이 있기 때문
//   state = {
//     //state는 object이다
//     // 내가 바꿀 데이터를 state에 넣는다.
//     isLoading: true,
//     movies: [],
//   };
//   getMovies = async () => {
//     // "axios가 끝나길 기다려"
//     const {
//       data: {
//         data: { movies },
//       },
//     } = await axios.get(
//       "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
//     );
//     this.setState({ movies, isLoading: false });
//   };
//   componentDidMount() {
//     this.getMovies();
//   }
//   render() {
//     const { isLoading, movies } = this.state;
//     return (
//       <section className="container">
//         {isLoading ? (
//           <div className="loader">
//             <span className="loader__text">Loading...</span>
//           </div>
//         ) : (
//           <div className="movies">
//             {movies.map((movie) => (
//               <Movie
//                 key={movie.id}
//                 id={movie.id}
//                 year={movie.year}
//                 title={movie.title}
//                 summary={movie.summary}
//                 poster={movie.medium_cover_image}
//                 genres={movie.genres}
//               />
//             ))}
//             ;
//           </div>
//         )}
//       </section>
//     );
//   }
// }

// // render -> (mount된 후) getMovies 함수 호출 -> getMovies는 axios.get을 사용하지만
// // axios.get은 완료되기까지 시간이 조금 필요하기 때문에 await을 넣은 것.

// export default App;

import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
