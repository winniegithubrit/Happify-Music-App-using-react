import React,{useState} from "react";
import './App.css';
function AddSong(props) {
  const [formState, setFormState] = useState({
    artist: '',
    title: '',
    description: '',
    rating: '',
    image: ''
  });

  const handleFormChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newSong = {
      artist: formState.artist,
      title: formState.title,
      description: formState.description,
      rating: formState.rating,
      image: formState.image
    };
    props.handleSongAdd(newSong);
    setFormState({
      artist: '',
      title: '',
      description: '',
      rating: '',
      image: ''
    });
  };

  return (
    <form onSubmit={handleFormSubmit} className="add-song">
      <h2>Add Song</h2>
      <label>
        Artist:
        <input type="text" name="artist" value={formState.artist} onChange={handleFormChange} />
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
        <input type="text" name="rating" value={formState.rating} onChange={handleFormChange} />
      </label>
      <br />
      <label>
        Image:
        <input type="text" name="image" value={formState.image} onChange={handleFormChange} />
      </label>
      <br />
      <button type="submit">Add Song</button>
    </form>
  );
}
export default AddSong