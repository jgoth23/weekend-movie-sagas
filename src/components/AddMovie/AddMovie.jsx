import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { purple} from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import swal from 'sweetalert';
import * as GiIcons from 'react-icons/gi'


// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #B284BE	, #FF8E73)',
//     border: 0,
//     borderRadius: 15,
//     color: 'white',
//     padding: '10px 30px',
//   },
//   table: {
//     minWidth: 650,
//   },
// });


// const theme = createMuiTheme({
//   typography: {
//     h2: {
//       fontSize: 42,
//       marginBottom: 25, 
//     }
//   },
//   palette: {
//     primary: {
//       main: purple[600],  
//     }
//   }
// })

// function ButtonStyled() {
//   const classes = useStyles();
//   return <Button className={classes.root}>Add a movie!!</Button>;
// }
const { Router } = require('react-router-dom');

const AddMovie = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('genre', genre);
    fetchGenre();
  }, []);
  const fetchGenre = () => {
    dispatch({ type: 'FETCH_GENRE' });
  };

  const genre = useSelector((store) => store.genres);

  const [newMovie, setNewMovie] = useState();
  const [newImage, setNewImage] = useState();
  const [newDescription, setNewDescription] = useState();
  const [newGenre, setNewGenre] = useState();

  const handleClick = () => {
    swal({
      title: "Nice choice!!",
      icon: "success"
    })
    dispatch({
      type: 'ADDING_MOVIE',
      payload: {
        title: newMovie,
        poster: newImage,
        description: newDescription,
        genre_id: newGenre,
      },
    });
    history.push('/');
  };
  const handleCancel = () => {
    history.push('/');
  };

  
    // const classes = useStyles();
  
  return (
    // <ThemeProvider theme={theme}>
      
      <div>
        <h1>
          Movie Collection 
        
          
        </h1>
        <form>
          <input
            type="text"
            placeholder="movie"
            onChange={(e) => {
              setNewMovie(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="URL"
            onChange={(e) => {
              setNewImage(e.target.value);
            }}
          />
          <select
            onChange={(e) => {
              setNewGenre(e.target.value);
            }}
          >
            {genre.map((g) => {
              return (
                <option value={g.id} key={g.id}>
                  {g.name}
                </option>
              );
            })}
          </select>

          <div>
            <textarea
              type="text"
              placeholder="Description"
              onChange={(e) => {
                setNewDescription(e.target.value);
              }}
            ></textarea>
          </div>

          <button
            className="saveBtn"
            onClick={handleClick}
            startIcon={<GiIcons.GiSaveArrow />}
          >
            Save
          </button>
          <button
            className="cancelBtn"
            onClick={handleCancel}
            startIcon={<GiIcons.GiCancel />}
           
          >
            Cancel
          </button>
          {/* <div>
            <TextField variant="outlined" color="secondary" type="date" />
          </div> */}
        </form>
      </div>
      
    
  );
            
};

export default AddMovie;
