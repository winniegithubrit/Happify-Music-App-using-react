
import React from 'react';

function DeleteSongButton({ handleSongDelete }) {
  return (
    <button onClick={handleSongDelete} className='music-info'>Delete Song</button>
  );
}

export default DeleteSongButton;
