import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('ADDING_MOVIE', addingMovies); 
    yield takeEvery('FETCH_GENRE', fetchGenre);
    yield takeEvery('FETCH_DETAILS', fetchDetails);
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

function* addingMovies(action) {
  try {
  console.log('in addMovie', action);
  yield axios.post('/api/movie', action.payload);
  console.log('where at', action.payload);

  yield put({
    type: 'FETCH_MOVIES',
  });
  }
  catch (err) {
    console.log('post failed',  err);
  }
}

function* fetchGenre() {
  try {
    const genre = yield axios.get('/api/genre')
    console.log('in genre', genre.data);

    yield put({
      type: 'SET_GENRES',
      payload: genre.data
    })
  }
  catch (err) {
    console.log('error', err);
  }
}

function* fetchDetails(action) {
  try {
    const details = yield axios.get(`/api/movie/${action.payload}`)
    console.log('in details', details.data);

    yield put({
      type: 'SET_DETAILS', 
      payload: details.data
    })
  }
  catch (err) {
    console.log('error', err)
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const details = (state = [], action) => {
  switch (action.type) {
    case 'SET_DETAILS':
      return action.payload;
      default:
        return state;
  }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
