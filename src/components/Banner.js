import React, { useEffect, useState } from "react";
import './Banner.css'
import instance from "../instance";


function Banner({fetchUrl}){
    
    const [banners, setBanners] = useState()
    const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchData= async () =>{
       const {data} =  await instance.get(fetchUrl);
       setBanners(data.results[Math.floor(Math.random()*data.results.length)]);
    }
    
     console.log(banners);

    useEffect(()=>{
        fetchData()
    },[])
  
    return(

     <div className="Banner" style={{backgroundImage:`url(${base_url}${banners?.backdrop_path})`}}>
       
       <div className="banner-content">
        <h1>{banners?.name}</h1>
        <button className="btn btn-danger me-3">play <i class="fa-solid fa-play"></i></button>
        <button className="btn btn-outline-light">more info</button>
        <h2>{banners?.overview}</h2>
       </div>

     </div>

    )
}

export default Banner;