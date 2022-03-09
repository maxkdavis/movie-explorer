import React from "react";

export default function MovieCard(props) {
    const movie = props.movie;
    return (
        <div className="card">
            <img className="card--image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title + " poster"} />
            <div className="card--content">
                <h3 className="card--title">{movie.title}</h3>
                <p className="card--description">{movie.overview}</p>
                <p className="inline">
                    <span className="gray">Release Date</span>
                    <br /> {movie.release_date}
                </p>
                <p className="inline">
                    <span className="gray">Rating</span>
                    <br /> {movie.vote_average}
                </p>
            </div>
        </div>
    );
}
