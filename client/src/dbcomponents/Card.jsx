import React from "react";
import Thor from '../images/Thor.jpg'
import axios from 'axios';

function Card (movie) {

    let img_path=`https://image.tmdb.org/t/p/w500`;

    return (
        <div>
            <div className="movie">
             <img src={img_path+movie.poster_path} alt="" className="poster" />
             <div className="movie-details">
                 <div className="box">
                     <div className="title">
                         <h2>{movie.name} {movie.title}</h2>
                     </div>
                     <div className="rating">
                         <h2>Rating</h2>
                         <p className="rate">{movie.vote_average.toFixed()}</p>
                     </div>
                 </div>
                 <div className="description">
                     <h2>Description</h2>
                     <p>{movie.overview} </p>
                 </div>
             </div>
            </div>
        </div>
    )
}

export default Card;