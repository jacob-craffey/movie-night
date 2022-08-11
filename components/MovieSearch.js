import React, { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import axios from "axios";
import Movie from "./Movie";

function MovieSearch() {
  const [movies, setMovies] = useState([]);

  const onChangeMovies = async (e) => {
    if (!e) return;
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        language: "en-US",
        page: 1,
        include_adult: false,
        query: e,
      },
    });

    console.log(res);

    const mappedItems = res.data.results.map((movie) => ({
      title: movie.original_title,
      poster: movie.poster_path,
      id: movie.id
    }));

    setMovies(mappedItems);
    console.log(mappedItems);
  };

  return (
    <div className="flex flex-col card w-full">
      <DebounceInput
        minLength={2}
        className="text-input "
        debounceTimeout={300}
        onChange={(event) => onChangeMovies(event.target.value)}
      />
      <div className="grid grid-cols-4 h-80 overflow-y-auto flex-wrap gap-y-5">
        {movies.map((movie) => (
          <div className="flex" key={movie.poster}>
            <Movie poster={movie.poster} id={movie.id} title={movie.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;
