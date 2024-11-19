import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=a52869a7";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
// import './App.css';
// import { useEffect } from 'react'
// import SearchIcon from "./search.svg";
// import MovieCard from './MovieCard';

// //a52869a7

// const API_URL = 'http://www.omdbapi.com?apikey=a52869a7'

// function App() {
//   const searchMovies = async(title) => {
//     const response = await fetch(`${API_URL}&s=${title}`)
//     const data = await response.json()

//     console.log(data)
//   }
//   useEffect(() => {
//     searchMovies('batman')
//   },[])

//   return (
//     <div className='app'>
//       <h1>MovieLand</h1>

//       <div className='search'>
//         <input
//           placeholder='Search for movies'
//           value='supa'
//           onChange={() => {}}
//         />
//         <img
//           src={SearchIcon}
//           alt='search'
//           onClick={() => {}}
//         />
//       </div>

//       {movies?.length > 0 ? (
//         <div className="container">
//           {movies.map((movie) => (
//             <MovieCard movie={movie} />
//           ))}
//         </div>
//       ) : (
//         <div className="empty">
//           <h2>No movies found</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
