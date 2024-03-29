import React from "react";
import CheckMovie from "./CheckMovie";


function MoveList({ data , AddFavorites, handleFavoritesClick, readMore}) {

  return (
    <>
      {data.map((movie) => (
        <div className="image-container d-flex justify-content-start m-3" key={movie.id}>
          <img src={movie.poster.previewUrl} alt={movie.title} width={200} />
          <div onClick={() => handleFavoritesClick(movie)}  className="overlay d-flex aling-items-center justify-content-center">
            <AddFavorites />
          </div>
          <div onClick={() => readMore(movie)} className="read-more d-flex aling-items-center justify-content-center">
            <CheckMovie />
          </div>
        </div>
      ))}
    </>
  );
}

export default MoveList;
