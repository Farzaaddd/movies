import { suggestedMovies } from "../../constants/movies"
import MovieCard from "../templates/MovieCard"
import SearchBox from "../templates/SearchBox"

const HomePage = () => {
    
  return (
    <div>
      <SearchBox/>

      <div className="swiper" style={{marginTop: "50px"}}>
        {suggestedMovies.map(movie => <MovieCard key={movie.imdbID} movie={movie}/>)}
      </div>
    </div>
  )
}

export default HomePage