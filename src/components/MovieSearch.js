import React, { useState } from "react";
import MovieCard from "./MovieCard.js";

export default function Search() {
    //create a state for the query
    const [query, setQuery] = useState("");

    //create a state for the movies returned. We get an array back
    const [movies, setMovies] = useState([]);

    function searchMovies(e) {
        e.preventDefault();

        let userInput = document.querySelector(".input");
        let searchResults = userInput.value.trim();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=9ae3258a05321d6654c994203524e881&query=${query}`;

        if (searchResults === "") {
            alert("Please enter a movie title");
            throw Error("Something went wrong");
        }
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results);
                //updating the 'movies' state when user submits new entry into the capturned form input value
                setMovies(data.results);
            })

            .catch((err) => console.error(err));
    }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query"></label>
                <input className="input" type="text" name="query" placeholder="Search movie title" value={query} onChange={(event) => setQuery(event.target.value)}></input>
                <button className="button" type="submit">
                    Search
                </button>
            </form>
            <div className="card-list">
                {movies
                    .filter((movie) => movie.poster_path)
                    .map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
            </div>
        </>
    );
}
