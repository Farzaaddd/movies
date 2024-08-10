import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { GetTitle } from '../../services/api';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TopicIcon from '@mui/icons-material/Topic';
import EditIcon from '@mui/icons-material/Edit';
import Person4Icon from '@mui/icons-material/Person4';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LanguageIcon from '@mui/icons-material/Language';
import PublicIcon from '@mui/icons-material/Public';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import AnimationIcon from '@mui/icons-material/Animation';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import "./MovieDetails.css"
import { useDispatch, useSelector } from 'react-redux';
import { addMovie } from '../../features/movieProvider';
// import { useMovie } from '../../context/movieContext';

const MovieDetails = () => {
    const [display, setDisplay] = useState(null)
    
    const { id } = useParams();
    const { mutate } = useMutation(GetTitle);

    const state = useSelector(state => state.movie)
    const dispatch = useDispatch();
    const IsCheck = state.saveList.find((i) => i.imdbID == id)

    useEffect(() => {
      mutate(id, {
        onSuccess: (fetchedData) => {
          setDisplay(fetchedData.data);
        },
        onError: (error) => {
          console.error('Error fetching data:', error);
        },
      });
    }, [id])


  return (
    <div>
        <div className='favorite-link'>
          <Link to="/favorites"> Go to save list <BookmarkOutlinedIcon/> </Link>
        </div>
      {display ? 
        <div className="bg-container" style={{ backgroundImage: `url(${display.Poster})`,}}>
        <div className="display">
          <div className="holder">
            <div className="cover">
              <div className="custom-img">
                <img src={display.Poster} alt="image" />
                <div className="overlay">
                  <span className="badge" onClick={() => dispatch(addMovie(display))}>
                    <FavoriteIcon color={IsCheck ? "error" : "#e0e0e0"} titleAccess='Add to list?'/>
                  </span>
                </div>
              </div>
            </div>
            <div className="meta">
              <div className="meta-head">
                <div className="left-side">
                  <div className="rating">
                    <strong> {display.imdbRating}/10 </strong>
                    <p> {display.imdbVotes} votes </p>
                  </div>
                  <a href={`https://www.imdb.com/title/${display.imdbID}`} target='_blank'>
                    <img src="https://avamovie.shop/wp-content/themes/TheAvaMovie/assets/images/img-medium.png" alt="image" />
                  </a>
                </div>

                <div className="right-side">
                  <h2> {display.Title}  ({display.Year}) </h2>
                </div>
              </div>

              <div className="meta-items">
                <ul>
                    <li>
                      <span className="icon"> <TopicIcon/> </span>
                      <span className="genre"> <strong>Genre:</strong> </span>
                      <span className="title"> {display.Genre} </span>
                    </li>

                    <li>
                      <span className="icon"> <Person4Icon/> </span>
                      <span className="genre"> <strong>Director:</strong> </span>
                      <span className="title"> {display.Director} </span>
                    </li>

                    <li>
                      <span className="icon"> <Person4Icon/> </span>
                      <span className="genre"> <strong>Type:</strong> </span>
                      <span className="title"> {display.Type} </span>
                    </li>
                    
                    <li>
                      <span className="icon"> <EditIcon/> </span>
                      <span className="genre"> <strong>Writer:</strong> </span>
                      <span className="title"> {display.Writer} </span>
                    </li>

                    <li>
                      <span className="icon"> <PublicIcon/> </span>
                      <span className="genre"> <strong>Country:</strong> </span>
                      <span className="title"> {display.Country} </span>
                    </li>

                    <li>
                      <span className="icon"> <AccessTimeIcon/> </span>
                      <span className="genre"> <strong>Runtime:</strong> </span>
                      <span className="title"> {display.Runtime} </span>
                    </li>

                    <li className="full">
                      <span className="icon"> <TheaterComedyIcon/> </span>
                      <span className="genre"> <strong>Actors:</strong> </span>
                      <span className="title"> {display.Actors} </span>
                    </li>

                    <li>
                      <span className="icon"> <LanguageIcon/> </span>
                      <span className="genre"> <strong>Languages:</strong> </span>
                      <span className="title"> {display.Language} </span>
                    </li>

                    <li>
                      <span className="icon"> <MilitaryTechIcon/> </span>
                      <span className="genre"> <strong>Awards:</strong> </span>
                      <span className="title"> {display.Awards} </span>
                    </li>

                    {display.totalSeasons && <li>
                      <span className="icon"> <AnimationIcon/> </span>
                      <span className="genre"> <strong>Seasons:</strong> </span>
                      <span className="title"> {display.totalSeasons} </span>
                    </li>}
                </ul>

                <div className="plot">
                  <p> <FormatQuoteIcon/> <strong>Plot:</strong> {display.Plot} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      : null}
    </div>
  )
}

export default MovieDetails