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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E73)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '10px 30px',
  },
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 42,
      marginBottom: 25, 
    }
  },
  palette: {
    primary: {
      main: purple[600],  
    }
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Add all the movies!!</Button>;
}
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

  
    const classes = useStyles();
  
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
      <div>
        <h1><Typography variant="h2" component="div">
          Movie Collection 
        </Typography>
          {' '}
          <ButtonStyled />
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

          <Button
            onClick={handleClick}
            startIcon={<SaveIcon />}
            variant="outlined"
            color="primary"
          >
            Save
          </Button>
          <Button
            onClick={handleCancel}
            startIcon={<DeleteIcon />}
            variant="outlined"
            color="primary"
          >
            Cancel
          </Button>
          <div>
            <TextField variant="outlined" color="secondary" type="date" />
          </div>
        </form>
      </div>
      </Container>
    </ThemeProvider>
    
  );
            
};

export default AddMovie;
