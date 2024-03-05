import React, { Component } from "react";
import CardMovie from "./CardMovie";
import style from "../styles/style.module.css";
import axios from "axios";

class Movies extends Component {
  state = {
    movies: [],
    genreArray: [],
    temp: [],
    userGenre: [],
    searchValue: "",
    isGenreBtnClicked: false,
    isErr: false,
  };

  componentDidMount() {
    this.getAllMovies();
  }

  getAllMovies = () => {
    axios.get("./movies.json").then((response) => {
      this.setState({ movies: response.data });

      const genreStr = response.data.map((movie) => movie.Genre).join(", ");
      const uniqueArray = [...new Set(genreStr.split(", "))];
      this.setState({ genreArray: uniqueArray.map((item) => [item, false]) });
    });
  };

  searchHandler = (event) => {
    const searchedMovies = this.state.movies.filter((movie) =>
      movie.Title.toUpperCase().includes(event.target.value.toUpperCase())
    );
    this.setState({ searchValue: event.target.value, temp: searchedMovies });
  };

  genreBtnHandler = (event) => {
    const { genreArray, userGenre } = this.state;
    const updatedGenreArray = genreArray.map((genre) =>
      genre[0] === event.target.value ? [genre[0], !genre[1]] : genre
    );
    const selectedGenres = updatedGenreArray.filter((genre) => genre[1]).map((genre) => genre[0]);
    const movieByUserGenre = this.state.movies.filter((movie) =>
      movie.Genre.split(", ").some((genre) => selectedGenres.includes(genre))
    );
    this.setState({ genreArray: updatedGenreArray, userGenre: selectedGenres, temp: movieByUserGenre });
  };

  render() {
    const { movies, searchValue, temp, genreArray, isGenreBtnClicked } = this.state;

    return (
      <>
        <div className={style["Movies-section"]}>
          <div className={style["left-box"]}>
            {(searchValue || isGenreBtnClicked ? temp : movies).map((movie) => (
              <CardMovie
                key={movie.id}
                poster={movie.Poster}
                title={movie.Title}
                director={movie.Director}
                year={movie.Year}
                genre={movie.Genre}
              />
            ))}
          </div>
          <div className={style["right-box"]}>
            <div className={style["search-box"]}>
              <input
                type="search"
                name=""
                id="searchnput"
                value={searchValue}
                onChange={this.searchHandler}
                placeholder="search by movie title"
              />
            </div>
            <div className={style["genre-box"]}>
              {genreArray.map((genre) => (
                genre[0] !== "" && (
                  <button
                    key={genre[0]}
                    className={genre[1] ? style["genre-btn-green"] : style["genre-btn"]}
                    onClick={this.genreBtnHandler}
                    data-isclicked={genre[1]}
                    value={genre[0]}
                  >
                    {genre[0]}
                  </button>
                )
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Movies;
