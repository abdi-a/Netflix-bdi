import "./banner.css"
import { useEffect, useState } from "react"
import axios from "./Axios"
import request from "./request"


const Banner = () => {
 const [movie, setMovie] = useState([]);
 useEffect(() => {

  async function fetchData() {
    const response = await axios.get(request.fetchNetflixOriginals);
    setMovie(
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      
      
      
      ]
    );
  }
  fetchData();

 }, []);
console.log(movie);


 function truncates(str, n) {

  return str?.length > n ? str.substr(0, n-1) + "..." : str;
 }






  return (
    <header className="banner" style={{
      backgroundSize:"cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition:"center center",
    }}>
    
<div className="banner-contents">
<h1 className="banner-title">
  {movie?.title || movie?.name || movie?.original_name}
</h1>
<div className="banner-buttons">
  <button className="banner-button">Play</button>
  <button className="banner-button">My List</button>
</div>
<h1 className="banner-description">
{/* {movie?.overview} */}

{truncates(movie?.overview,150)}

</h1>




</div>
<div className="banner--fadeBottom" />



    </header>
  )
}

export default Banner
