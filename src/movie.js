import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster }) {
  return (
    <div class="movies__movie">
      <img src={poster} alt={title} title={title} />
      <h3 class="movie__title">{title}</h3>
      <h5 class="movie__year">{year}</h5>
      <p class="movie__summary">{summary}</p>
    </div>
  );
}
// props는 아래 propsTypes를 통해서 정의할 수 있다
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string,
};

export default Movie;
