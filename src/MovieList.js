import React, {useState, useEffect} from "react";
import Movie from "./movie";

const MovieList = () => {
    //STATE
    const [movies, setMovies] = useState([]);
   
   
    //SEARCH
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('game')
    useEffect(() => {
    getMovies()
    }, [query])
 
//FUNCTIONS(get movies)
    const getMovies = async () => {
      try {
         const response = await fetch(`https://www.omdbapi.com/?apikey=a7a37b5e&s=${query}&plot=short`)
         const data = await response.json()
      setMovies(data.Search)
      } 
      catch (err) {
        console.error('err', err)
      }
    }
     const UpdateSearch = (e) => {
    setSearch(e.target.value)
     }
     const getSearch =(e) => {
       e.preventDefault()
       setQuery(search)
      setSearch('')
     }
   
return(
<div className="container">
<form onSubmit={getSearch}>
     <input
     placeholder="Search your movie"
     value={search}
     onChange={UpdateSearch}
     type='text' className="search-bar"></input>
     <button className="search-button"><i className="fas fa-search"></i></button>
 
 </form>

<div className = "movie">
    
{movies.map(movie => (

<Movie  
poster = {movie.Poster}
title = {movie.Title}
year = {movie.Year}
type = {movie.Type}
movieId = {movie.imdbID}
key = {movie.imdbID}


/>

))}
</div>
</div>


)
}


export default MovieList