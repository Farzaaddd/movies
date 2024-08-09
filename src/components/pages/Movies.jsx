import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBox from '../templates/SearchBox'
import MovieCard from '../templates/MovieCard';
import { GetPage } from '../../services/api';
import { useMutation } from '@tanstack/react-query';
import Pagination from '@mui/material/Pagination';


const Movies = () => {
  // get data by search 
  const location = useLocation();
  const { searchResults } = location.state || {};
  const search = location.state?.search

  const [display, setDisplay] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(99);
  const { mutate } = useMutation(GetPage);

  useEffect(() => {
    setDisplay(searchResults)
    setPage(1)
  }, [searchResults])

  const handleChange = (event, value) => {
    setPage(value);
    
    mutate({search, page: value}, {
      onSuccess: (fetchedData) => {
        setDisplay(fetchedData.data.Search);
        setTotal(fetchedData.data.totalResults)        
      },
      onError: (error) => {
        console.error('Error fetching data:', error);
      },
    });
  };

  return (
    <>
    <SearchBox/>
      <div>
        <h1>Search Results</h1>
        {display ? (
          <div className="swiper">
            {display.map((movie, index) => (
              <MovieCard key={index} movie={movie}/>
            ))}
          </div>
        ) : (
          <h5> Not page found :( </h5>
        )}

      </div>

    <Pagination count={Math.floor(total/10+1)} page={page} onChange={handleChange} />
    </>
  );
};


export default Movies;
