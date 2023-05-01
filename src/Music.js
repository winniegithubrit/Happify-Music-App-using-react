import './App.css';
import React, { useState, useEffect } from 'react';
import DeleteSongButton from './DeleteSongButton';
import UpdateSongButton from './UpdateSongButton';
function Music({songs}) {
   // Defined state variables for the selected song and all song data
  const [data, setData] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
 
 //when the user selects the song from the list the selected song state gets updated
  const handleSongSelect = (song) => {
    setSelectedSong(song);
  };
// When a user deletes a song, send a DELETE request to the API and update the data
  const handleSongDelete = () => {
    if (selectedSong) {
      fetch(`http://localhost:3000/songs/${selectedSong.id}`, {
        method: "DELETE"
      })
      .then(() => {
        setData(data.filter(song => song.id !== selectedSong.id));
        setSelectedSong(null);
        // Reloading the page to show the changes
        window.location.reload()
      })
      
    }
  };
// When a user updates a song,  a PATCH request is sent  to the API and updates the data
  const handleSongUpdate = (updatedSong) => {
    fetch(`http://localhost:3000/songs/${selectedSong.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedSong)
    })
    .then(response => response.json())
    .then(json => {
      setData(data.map(song => {
        if (song.id === json.id) {
          return json;
        } else {
          return song;
        }
      }));
      setSelectedSong(json);
    })
    
  };

  return (
    <div className='music-details'>
    <div className='song-list'>
      <ul>
        {songs.map((song) => (
          <li key={song.id} onClick={() => handleSongSelect(song)}>
            {song.title}
          </li>
        ))}
      </ul>
  {selectedSong && (
        <div className='music-info-and-image-container'>
          <img src={selectedSong.image} alt={selectedSong.title} />
          <div className='music-info'>
            <h2>ARTIST: {selectedSong.artist}</h2>
            <h3>TITLE:  {selectedSong.title}</h3>
            <p>DESCRIPTION: {selectedSong.description}</p>
            <p>Rating: {selectedSong.rating}</p>
          </div>
                      {/* Render the DeleteSongButton component and pass the handleSongDelete function as a prop */}

          <DeleteSongButton handleSongDelete={handleSongDelete} />
     
          <UpdateSongButton selectedSong={selectedSong} handleSongUpdate={handleSongUpdate} />
        </div>
      )}
    </div>
    </div>
  );
}

export default Music;

