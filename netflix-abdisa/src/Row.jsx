import { useState } from "react"
import { useEffect } from "react";
import axios from "./Axios";
import "./row.css"
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

import movieTrailer from "movie-trailer"
const Row = ({title, fetchUrl, isLargeRow}) => {
  const base_url = "https://image.tmdb.org/t/p/original/";

   const [movies, setMovies] = useState([]);
   const [trailerUrl, setTrailerUrl] = useState("")
  
  useEffect(()=>{
  async function fetchData(){
   const request = await axios.get(fetchUrl);

   setMovies(request.data.results)
   return request;
}
  fetchData();
},[fetchUrl]);
  
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
      },
    };

 const handleClick = (movie) => {
 if (trailerUrl) {
setTrailerUrl ('')

 }
 else {
  movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
  .then(url => {
    const urlParams = new URLSearchParams(new URL(url).search);
    setTrailerUrl(urlParams.get('v'));
  })
  .catch(error => console.log(error))
 }


 };





   return (
    <div className="row">
      <h2>{title}</h2>
    <div className="row-posters">
 {movies.map(movie => (
    <img className= {`row-poster ${isLargeRow && "row-posterLarge"}`}
    key={movie.id} 
    
    onClick= {() => handleClick(movie)} 
     src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
 ))}  
 
 </div>

{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} 


</div>

  )
}
Row.propTypes = {
  title: PropTypes.string.isRequired,
  fetchUrl: PropTypes.string.isRequired,
  isLargeRow: PropTypes.bool
};

export default Row























