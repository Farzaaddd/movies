import { useState } from 'react'
import { suggestedMovies } from '../../constants/movies'
import MovieCard from '../templates/MovieCard'
import SearchBox from '../templates/SearchBox'
import "../templates/MovieCard.css"
import FilterBox from '../templates/FilterBox'

const Filter = () => {
    const [details, setDetails] = useState(null);
    
  return (
    <div>
        <SearchBox/>
        <FilterBox display={details} setDetails={setDetails}/>

       {details == null ? <div className="swiper">
            {suggestedMovies.map(movie => <MovieCard key={movie.imdbID} movie={movie}/>).reverse()}
       </div> : 
       <div className="swiper">
            {details ? details.map(movie => <MovieCard key={movie.imdbID} movie={movie}/>) : <h4> Data not found </h4>} 
       </div>}


    </div>
  )
}

export default Filter