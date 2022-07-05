import React from "react";
import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
//398425f2

const API_URL="http://www.omdbapi.com/?i=tt3896198&apikey=398425f2"

const movie1={
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
}


const App =()=>{
const searchMovies = async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
}
    useEffect(()=>{
        searchMovies('Spiderman')
    },[]);
    return(
       <div className="app">

        <h1>MovieLand</h1>

        <div className="search">
            <input 
            placeholder="Search for movies"
            value="Superman"
            onChange={()=>{}}
            />
            <img 
            src={SearchIcon} 
            alt="search"
            onClick={()=>{}}/>
        </div>

        <div className="container">
        <div className="movie">
            <div>
                <h2>{movie1.Year}</h2>
            </div>

            <div>
               <img src={movie1.Poster !== 'N/A'? movie1.Poster: "http://via.placeholder.com/400"} alt={movie1.Title}/> 
            </div>

            <div>
             <span>{movie1.Type}</span>
             <h3>{movie1.Title}</h3>
            </div>

        </div>

        </div>

       </div>   
        )
}

export default App;