import SlideshowIcon from '@mui/icons-material/Slideshow';
import "./MovieCard.css"
import { Link } from 'react-router-dom';
const MovieCard = ({movie}) =>  {
    
  return (
    <div>
        <div className="swiper-slide swiper-slide--one" title={movie.Title ? movie.Title : movie.title}
        style={{ backgroundImage: `url(${movie.Poster ? movie.Poster : movie.poster})` }}>
            <div className="slide-content">
                <span>
                    <Link to={`/movies/${movie.imdbID}`}>
                        <SlideshowIcon sx={{fontSize: "25px"}}/>    
                    </Link>
                </span>
            </div>

            <div className="custom-details">
                <span> {movie.Year ? movie.Year : movie.year} </span>
                <span> {movie.Type ? movie.Type : movie.type} </span>
            </div>
        </div>

        <div className="movie-details">
            <h4> {movie.Title ? movie.Title : movie.title} </h4>
        </div>
    </div>
  )
}

export default MovieCard