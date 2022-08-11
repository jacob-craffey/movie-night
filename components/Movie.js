import React from "react";
import { useDispatch } from "react-redux";

import Image from "next/image";
import { addMovie } from "../slices/movieSlice";

function Movie({ poster, id, title }) {
  const dispatch = useDispatch();

  const onMovieClick = () => {
    console.log(id);
    dispatch(addMovie({ id, poster, title }));
  };

  return (
    <Image
      src={`https://image.tmdb.org/t/p/w154${poster}`}
      width={200}
      height={200}
      objectFit="contain"
      className="cursor-pointer"
      onClick={onMovieClick}
    />
  );
}

export default Movie;
