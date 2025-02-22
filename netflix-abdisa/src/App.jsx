


import "./app.css"


import Row from "./Row"

import request from "./request"

import Banner from "./Banner"
import Nav from "./Navbar"
const App = () => {
  return (
    <div className = "app">
    <Nav />
      <Banner/>
    <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals}
    isLargeRow = {true}/>
      <Row title="Trending Now" fetchUrl={request. fetchTrending}/>
    <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
    <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
    <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/>








    </div>
  )
}

export default App


