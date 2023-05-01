import React, { useState, useEffect } from 'react';
import './App.css';
import Music from "./Music";
import SearchSong from "./SearchSong";
import AddSong from './AddSong';

 function App() {
  // Defined state variable for songs data
  const [data, setData] = useState([]);
// Fetch songs data from server 
  useEffect(() => {
   fetch("http://localhost:3000/songs")
     .then(response => response.json())
     .then(json => setData(json))
  }, []);
// Function to add new song to server and update state
  const handleSongAdd = (newSong) => {
    fetch("http://localhost:3000/songs", {
     method: "POST",
     headers: {
      "Content-Type": "application/json"
     },
     body: JSON.stringify(newSong)
   })
    .then(response => response.json())
    .then(json => setData([...data, json]))
    .catch(error => console.error(error));
 };
//filtering songs based on the search query
  const handleSearch = (search) => {
    let results = data.filter((song) => {
      return song.title === search
    })
    setData(results)
  }

  return (
    <div className="App">
      <h1>HAPPIFY MUSIC APP</h1>
      <SearchSong handleSearch={handleSearch}/> 
      <Music songs={data} />
      <AddSong handleSongAdd={handleSongAdd} />
    </div>
  );
}

export default App;
