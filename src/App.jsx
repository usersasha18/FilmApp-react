import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MoveList from "./components/MoveList";
import SearchHeading from "./components/SearchHeading";
import SearchBox from "./components/SearchBox";
import AddFavorites from "./components/AddFavorites";
import RemoveFavorites from "./components/RemoveFavorites";
import ReadMore from "./components/ReadMore";

import { movies } from "./data";

function App() {
  const [data, setData] = useState(movies.docs);
  const [searchValue, setSearchValue] = useState("");
  const [favorite, setFavorite] = useState([]);
  const [read, setRead] = useState([])
  const [toggle, setToggle] = useState(false)

  //   const getMovieRequest = async () => {
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         accept: "application/json",
  //         "X-API-KEY": "A32AZC0-3BDMNDX-N1NC3E6-8QFZP7H",
  //       },
  //     };

  //     fetch(
  //       `https://api.kinopoisk.dev/v1.4/movie/search?page=3&limit=10&query=${searchValue}`,
  //       options
  //     )
  //       .then((response) => response.json())
  //       .then((response) => setData(response.docs))
  //       .catch((err) => console.error(err));
  //   };

  //   useEffect(() => {
  //     getMovieRequest();
  //   }, [searchValue]);

  useEffect(()=> {
    const movieStorage = JSON.parse(
      localStorage.getItem("favotires-movie-app")
    )
    setFavorite(movieStorage)
  },[])

  const readMore = (movie) => {
    const newReadMovie = [...read, movie];
    setRead(newReadMovie)
    setToggle(true)
  }

  const saveToLocalStorage = (item) => {
      localStorage.setItem("favotires-movie-app", JSON.stringify(item))
  }

  const addFavoriteMovie = (movie) => {
    const newFavoriteMovie = [...favorite, movie];
    setFavorite(newFavoriteMovie);
    saveToLocalStorage(newFavoriteMovie)
  };

  const removeFavoritesMovie = (movie) => {
    const newFavoritesMovie = favorite.filter(
      (favorite) => favorite.id != movie.id
    );
    setFavorite(newFavoritesMovie);
    saveToLocalStorage(newFavoritesMovie)
  };

  return (
    <div className="container-fluid movie-app">
      <div className="header">
        <SearchHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="movies">
        <MoveList
          data={data}
          handleFavoritesClick={addFavoriteMovie}
          AddFavorites={AddFavorites}
          readMore={readMore}
        />
      </div>
      <div className="header">
        <SearchHeading heading="Favorites" />
      </div>
      <div className="movies">
        <MoveList
          data={favorite}
          handleFavoritesClick={removeFavoritesMovie}
          AddFavorites={RemoveFavorites}
          readMore={readMore}
        />
      </div>
      <div className="header">
        <SearchHeading heading="About Film" />
      </div>
      <div>
        <ReadMore read={read} toggle={setToggle} />
      </div>
    </div>
  );
}

export default App;
