import React, {useState} from "react";
import { Link } from 'react-router-dom'



const Movie = ({poster, title, type, year, movieId}) => {
    const [color, setColor] = useState(false)
    const [transfer, setTransfer] = useState({})

  const colorHandler = () =>{
      setColor(color ? false : true)
    setTransfer([
  title = {title}
    ])
  }  
return(
    <div>
        <img className="movie-img" src={poster} alt={title}></img>
        <h2 key = {movieId}>
<Link className="movie-title" to={`/movieList/${movieId}`}>
    {title}
 
    </Link></h2>
    <button className = 'fav'>

        
 <i onClick={colorHandler}
   className= 
   {`fas fa-heart-circle-plus${color ?
    'fas fa-heart-circle-check':
     'fas fa-heart-circle-plus'}`}>
         
         </i></button>
   
       <h3 className="movie-year">{year}</h3>

       
     </div>
)

}

export default Movie