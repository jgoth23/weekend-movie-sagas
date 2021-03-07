import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const { Router } = require("react-router-dom")

const AddMovie = () => {
  const history = useHistory();


  const dispatch = useDispatch();
  
  useEffect(() => {
    console.log('genre', genre);
   fetchGenre();
}, []);
const fetchGenre = () => {
  dispatch({ type: 'FETCH_GENRE' });
}
  
  const genre = useSelector(store => store.genres);


  const [newMovie, setNewMovie] = useState();
  const [newImage, setNewImage] = useState();
  const [newDescription, setNewDescription] = useState();
  const [newGenre, setNewGenre] = useState();

  

  const handleClick = () => {
    dispatch({
      type: 'ADDING_MOVIE', 
      payload: {
        title: newMovie, 
        poster: newImage, 
        description: newDescription, 
        genre_id: newGenre
      }
    })
    history.push('/')
  }
  const handleCancel = () => {
    history.push('/');
  }

  return (
    <div>
      <h1>Add Movie Here!</h1>
      <form>
        <input type="text"
        placeholder="movie"
        onChange={(e) => {
          setNewMovie(e.target.value);
        }}
          />
        <input type="text"
        placeholder="URL"
        onChange={(e) => {
          setNewImage(e.target.value);
        }}
         />
        <select 
        onChange={(e) => {
          setNewGenre(e.target.value);
        }}>
          {genre.map((g) => {
            return (
              <option value={g.id} key={g.id}>{g.name}</option>
            )
          })}
 
      </select>
          
        <div>
        <textarea type="text"
        placeholder="Description"
        onChange={(e) => {
          setNewDescription(e.target.value);
        }}>
        </textarea>
        </div>
        <button onClick={handleClick}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default AddMovie;
