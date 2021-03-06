const { Router } = require("react-router-dom")

const AddMovie = () => {
  return (
    <div>
      <h1>Add Movie Here!</h1>
      <form>
        <input type="text" placeholder="movie title" />
        <input type="text" placeholder="img poster URL" />
        <select>
        <option placeholder="genre">Genre</option>
        <option value="adventure">Adventure</option>
        <option value="animated">Animated</option>
        <option value="biographical">Biographical</option>
        <option value="comedy">Comedy</option>
        <option value="disaster">Disaster</option>
        <option value="drama">Drama</option>
        <option value="epic">Epic</option>
        <option value="fantasy">Fantasy</option>
        <option value="musical">Musical</option>
        <option value="romantic">Romantic</option>
        <option value="science fiction">Science Fiction</option>
        <option value="space-opera">Space-Opera</option>
        <option value="superhero">Superhero</option>
      </select>
        <div>
        <textarea placeholder="add a description"></textarea>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
