import React, { useEffect, useState } from "react";
import "./App.css";
import Movies from "./comp/Movies";
import Toggle from "./comp/Toggle/Toggle";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const api_theaters =
  "https://api.themoviedb.org/3/discover/movie?api_key=7d23723555b26e1b06ddce00f0769e34&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
const api_home =
  "https://api.themoviedb.org/3/discover/tv?api_key=7d23723555b26e1b06ddce00f0769e34&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0";
const api_search =
  "https://api.themoviedb.org/3/search/movie?api_key=7d23723555b26e1b06ddce00f0769e34&query=";

function App() {
  const [show, setShow] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [moviesMain, setMoviesMain] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    if (toggled === false) {
      fetch(api_home)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMoviesMain(data.results);
        });
    } else {
      fetch(api_theaters)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMoviesMain(data.results);
        });
    }
  }, [toggled]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      fetch(api_search + searchTerm)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMoviesMain(data.results);
        });
      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOnClick = () => {
    setToggled(!toggled);
  };

  return (
    <div className="main">
      <div className="header">
        <div className="upper-text">
          <div classname="imagee">
            <h1>Welcome.</h1>
          </div>

          <h3>
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
        </div>
        <div className="row col d-flex justify-content-center">
          <div className="forma col-11 row ">
            <div className="col-sm-10">
              <form onSubmit={handleOnSubmit}>
                <input
                  className="form-input w-100 "
                  dir="auto"
                  id="inner_search_v4"
                  name="query"
                  type="text"
                  tabindex="1"
                  autocorrect="off"
                  autofill="off"
                  autocomplete="off"
                  spellcheck="false"
                  placeholder="Search for a movie, tv show, person......"
                  value={searchTerm}
                  onChange={handleOnChange}
                />
              </form>
            </div>
            <div className="col-md-2 col-l-1">
              <input
                className="in w-100"
                type="submit"
                value="Search"
                onClick={handleOnSubmit}
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="donji">
        <div className="popular row col d-flex justify-content-center">
          <div className="tekst col-3 row">
            <h3>What's Popular</h3>
          </div>
          <div className="toggle-2 col-4 row ">
            <Toggle toggled={toggled} onClick={handleOnClick} />
          </div>
        </div>

        <div className="container-for-movies">
          {moviesMain &&
            moviesMain.map((movies) =>
              toggled === false ? (
                <Movies
                  key={movies.id}
                  title={movies.original_name}
                  release_date={movies.first_air_date}
                  poster_path={movies.poster_path}
                  vote_average={movies.vote_average}
                  overview={movies.overview}
                  background={movies.backdrop_path}
                  country={movies.origin_country}
                  dir={movies.genres}
                />
              ) : (
                <Movies
                  key={movies.id}
                  title={movies.original_title}
                  release_date={movies.release_date}
                  poster_path={movies.poster_path}
                  vote_average={movies.vote_average}
                  overview={movies.overview}
                  background={movies.backdrop_path}
                  country={movies.origin_country}
                  dir={movies.genres}
                />
              )
            )}
        </div>
      </div>
    </div>
  );
}

export default App;
