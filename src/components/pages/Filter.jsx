import { suggestedMovies } from '../../constants/movies'
import MovieCard from '../templates/MovieCard'
import SearchBox from '../templates/SearchBox'
import "../templates/MovieCard.css"
import FilterBox from '../templates/FilterBox'
import { useState } from 'react'

const Filter = () => {
    const [details, setDetails] = useState(null);
    console.log(details);
    
    
  return (
    <div>
        <SearchBox/>
        <FilterBox display={details} setDetails={setDetails}/>

       {details == null ? <div className="swiper">
            {suggestedMovies.map(movie => <MovieCard key={movie.imdbID} movie={movie}/>)}
       </div> : 
       <div className="swiper">
            {details ? details.map(movie => <MovieCard key={movie.imdbID} movie={movie}/>) : <h4> Data not found </h4>} 
       </div>}
    </div>
  )
}

export default Filter