import "./App.css";
import movies from "./data/movies";

function App() {
  return (
    <div className="App">
      {movies.map((movie, index) => {
        return (
          <section key={index} className="movie-list-section">
            <img src={movie.image}/>
            <div className="container">
              <div>Title: {movie.title}</div>
              <div>Year: {movie.year}</div>
              <div>Runtime: {movie.runtime}</div>
              <div className="genres">Genres: {
                <div className="genreContainer">
                  {
                    movie.genres.map((genre, index) => {
                      return (
                        <span className="genre" key={index}>{genre}</span>
                      )
                    })
                  }
                </div>
                
              }</div>
              <div>IMDB Ratings: {movie.imdbRating}</div>
              <div>IMDB Votes: {movie.imdbVotes}</div>
            </div>
          </section>
        )
      })}
    </div>
  );
}

export default App;
