import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  const movieInfo = (id) => {
    console.log('made it');
    dispatch({ type: 'FETCH_DETAILS', payload: id });
    history.push('/details');
  };

  const addMovie = () => {
    history.push('/addmovie')
  }

  const deleteMovie = (id) => {
    axios({
      method: 'DELETE',
      url: `api/movie/${id}`,
    })
    .catch((error) => {
      console.log('errror', error);
    });
  }

  return (
    <main>
      <h1>MovieList</h1>
      <div className="mainContainer">
      
      {/* <section className="movies"> */}
        {movies.map((movie) => {
          return (
            <div className="card" key={movie.id}>
              <h3>{movie.title}</h3>
              <img
                onClick={() => movieInfo(movie.id)}
                src={movie.poster}
                alt={movie.title}
              />
              <div>
              <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>
              </div>
            </div>
          );
        })}
      {/* </section> */}
      
      </div>
      <div>
        <button className="addBtn" onClick={addMovie}>Add Movie</button>
      </div>
    </main>
  );
}

export default MovieList;
