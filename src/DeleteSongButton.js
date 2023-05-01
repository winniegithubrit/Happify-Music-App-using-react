
import React from 'react';
//this is the delete function 
function DeleteSongButton({ handleSongDelete }) {
  return (
    //the delete button with an event passed to it so that it renders when the button is clicked 
    <button onClick={handleSongDelete} className='music-info'>Delete Song</button>
  );
}
//exporting the delete button
export default DeleteSongButton;
