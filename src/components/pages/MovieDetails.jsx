import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { GetTitle } from '../../services/api';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TopicIcon from '@mui/icons-material/Topic';
import EditIcon from '@mui/icons-material/Edit';
import Person4Icon from '@mui/icons-material/Person4';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import DetailsIcon from '@mui/icons-material/Details';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LanguageIcon from '@mui/icons-material/Language';
import PublicIcon from '@mui/icons-material/Public';
import "./MovieDetails.css"
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const [display, setDisplay] = useState(null)
    const { id } = useParams();
    const { mutate } = useMutation(GetTitle);
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
      {display ? 
        <div className="bg-container" style={{ backgroundImage: `url(${display.Poster})`,}}>
        <div className="display">
          <div className="holder">
            <div className="cover">
              <div className="custom-img">
                <img src={display.Poster} alt="image" />
                <div className="overlay">
                  <span className="badge">
                    <FavoriteIcon color='primary' titleAccess='Add to list?'/>
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

                    <li>
                      <span className="icon"> <LanguageIcon/> </span>
                      <span className="genre"> <strong>Languages:</strong> </span>
                      <span className="title"> {display.Language} </span>
                    </li>

                    <li className="full">
                      <span className="icon"> <TheaterComedyIcon/> </span>
                      <span className="genre"> <strong>Actors:</strong> </span>
                      <span className="title"> {display.Actors} </span>
                    </li>
                </ul>

                <div className="plot">
                  <p> <DetailsIcon/> <strong>Plot:</strong> {display.Plot} </p>
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