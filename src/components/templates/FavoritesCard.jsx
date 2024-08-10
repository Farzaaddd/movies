import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import SlideshowIcon from '@mui/icons-material/Slideshow';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import PublishIcon from '@mui/icons-material/Publish';
import TopicIcon from '@mui/icons-material/Topic';
import Person4Icon from '@mui/icons-material/Person4';
import EditIcon from '@mui/icons-material/Edit';
import PublicIcon from '@mui/icons-material/Public';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import styles from "./FavoritesCard.module.css"
import { removeMovie } from "../../features/movieProvider";

const FavoritesCard = ({movie}) => {
    const dispatch = useDispatch();
    console.log(movie);
    
  return (
    <div className={styles.container}>
        <div className={styles.card}>
            <div className={styles.cardBody}> 
                <div className={styles.image}>
                    <img src={movie.Poster} alt="image" />
                    <div className={styles.overlay}>
                      <span>
                        <Link to={`/movies/${movie.imdbID}`}>
                            <SlideshowIcon sx={{fontSize: "25px"}}/>    
                        </Link>
                    </span>
                   </div>
                </div>

                <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>{movie.Title} ({movie.Year}) </h3>

                  <div>
                    <div className={styles.information}>
                       <div className={styles.custom}>
                        <p> <PublishIcon/> <strong> Released: </strong> {movie.Released}</p>
                        <p> <TopicIcon/> <strong> Genre: </strong> {movie.Genre}</p>
                        <p> <AccessTimeIcon/> <strong> Runtime: </strong> {movie.Runtime}</p>
                        <p> <PublicIcon/> <strong> Country: </strong> {movie.Country}</p>
                      </div>

                        <div>
                        <p> <Person4Icon/> <strong> Director: </strong> {movie.Director}</p>
                        <p> <TheaterComedyIcon/> <strong> Actors: </strong> {movie.Actors}</p>
                        <p> <EditIcon/> <strong> Writer: </strong> {movie.Writer}</p>
                       </div>
                    </div>

                    <div className={styles.save} onClick={() => dispatch(removeMovie(movie))}>
                      <p> <FormatQuoteIcon/> <strong> Plot: </strong> {movie.Plot}</p>
                      <p>
                        <BookmarkRemoveIcon/>
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.rating}>
                  <div className={styles.details}>
                    <strong> {movie.imdbRating}/10 </strong>
                    <p> {movie.imdbVotes} votes </p>
                  </div>
                  <a href={`https://www.imdb.com/title/${movie.imdbID}`} target='_blank'>
                    <img src="https://avamovie.shop/wp-content/themes/TheAvaMovie/assets/images/img-medium.png" alt="image" />
                  </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FavoritesCard