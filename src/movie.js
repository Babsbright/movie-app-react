import React from "react";
import { Link } from 'react-router-dom'


const Movie = ({poster, title, type, year, movieId}) => {
    
    
return(
    <div>
        <img className="movie-img" src={poster} alt={title}></img>
        <h2 key = {movieId}>
<Link className="movie-title" to={`/movieList/${movieId}`}>
    {title}
    <span className="fav"> <i className="fas fa-heart"></i></span>
   
    </Link></h2>
       <h3 className="movie-year">{year}</h3>
     </div>
)

}

export default Movie