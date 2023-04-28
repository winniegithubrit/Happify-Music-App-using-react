import React, { useState } from 'react';

function UpdateSongButton(props) {
const [formState, setFormState] = useState({
artist: props.selectedSong.artist,
title: props.selectedSong.title,
description: props.selectedSong.description,
rating: props.selectedSong.rating,
image: props.selectedSong.image
});

const handleFormChange = (event) => {
setFormState({
...formState,
[event.target.name]: event.target.value
});
};

const handleFormSubmit = (event) => {
event.preventDefault();
props.handleSongUpdate(formState);
};

return (
<form onSubmit={handleFormSubmit} className='music-info'>
<label>
Artist:
<input type="text" name="artist" value={formState.artist} onChange={handleFormChange} placeholder='title'/>
</label>
<br />
<label>
Title:
<input type="text" name="title" value={formState.title} onChange={handleFormChange} />
</label>
<br />
<label>
Description:
<input type="text" name="description" value={formState.description} onChange={handleFormChange} />
</label>
<br />
<label>
Rating:
<input type="number" name="rating" min="0" max="10" value={formState.rating} onChange={handleFormChange} />
</label>
<br />
<label>
Image:
<input type="text" name="image" value={formState.image} onChange={handleFormChange} />
</label>
<br />
<button type="submit">Update</button>
</form>
);
}

export default UpdateSongButton;