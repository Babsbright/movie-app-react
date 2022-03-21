import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import style from './movie.module.css'


const Item = () => {
    const params = useParams();
    const [details, setDetails] = useState({})
    
    useEffect(()=> {
        fetchItem()
    },[])
    
    const fetchItem = async () =>{
        const fetchMovie = await fetch(`https://www.omdbapi.com/?i=${params.id}&apikey=a7a37b5e&plot=full`)
        const response = await fetchMovie.json()
  
        setDetails(response)
    }
        return(

            
            <div className={style.movie}>
                <h5 className ={style.detail}>Movie Details</h5>
                <img className={style.image} src={details.Poster} alt={details.Title}/>
                <h2 className={style.title}>{details.Title}</h2>
                <h4 className={style.genre}>{details.Genre}</h4>
                <h4 className={style.actor}>Actors: {details.Actors} </h4>
                
                <h4 className={style.rated}>{details.Runtime} || {details.Rated} </h4>
                <h4 className={style.release}>Released: {details.Released}</h4>
                
                <h4 className={style.synopsis}>Synopsis</h4>
                <p className={style.plot}>{details.Plot}</p>
                <p className={style.year}>{details.year}</p>
   
            </div>
        )


}

export default Item;