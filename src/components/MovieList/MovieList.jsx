import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'
import { makeStyles } from '@material-ui/core/styles';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
     const history = useHistory();


    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);
     
    const movieInfo = (id) => {
      console.log('made it');
      dispatch({type: 'FETCH_DETAILS', payload: id})
      history.push('/details');
      
      
    }

    return (
        <main>
            <h1>MovieList</h1>
            
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div className="divContainer" key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick={() => movieInfo(movie.id)} src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
                <div>
                  <button>Add Movie</button>
                </div>
            </section>
        </main>

    );
}

export default MovieList;