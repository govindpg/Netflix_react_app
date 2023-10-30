import React, { useEffect, useState } from "react";
import instance from "../instance";
import './Row.css'

function Row ({title , fetchUrl , isPoster}){
  // console.log(fetchUrl);

  const [allMovies,setAllmovies] = useState()
  const base_url = "https://image.tmdb.org/t/p/original/";

  const fetchData = async ()=>{
    const {data} =  await instance.get(fetchUrl);
    // const {result} = data
    setAllmovies(data.results);
  }

  // console.log(allMovies);

  useEffect(()=>{
    fetchData()
  },[])

return(
 <div className="row">
    <h1>{title}</h1>
    <div className="movie-row">
      {
        allMovies?.map(item=>(
          //the item.backdrop_path only give a partial link but the link only work if it is full so we need to add the baseUrl of image here
          <img className={`movie 
          ${isPoster && `movie-poster`} `} src={`${base_url}${isPoster?item.poster_path : item.backdrop_path}`} alt="no image" />
        ))
      }
    </div>
 </div>
)
}

export default Row;