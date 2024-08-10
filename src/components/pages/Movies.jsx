import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { GetPage } from '../../services/api';
import { useMutation } from '@tanstack/react-query';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import SearchBox from '../templates/SearchBox'
import MovieCard from '../templates/MovieCard';
import Loader from '../templates/Loader';


const Movies = () => {
  // get data by search 
  const location = useLocation();
  const { searchResults } = location.state || {};
  const search = location.state?.search
  const navigate = useNavigate();
  
  const [display, setDisplay] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(99);
  const { mutate, isLoading } = useMutation(GetPage);

  useEffect(() => {
    !searchResults && navigate('/')
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

  if (isLoading) return <Loader />;

  return (
    <>
    <SearchBox/>
      <div>
        <h1 style={{color: "#fff", paddingLeft: "30px"}}>Search Results</h1>
        {display ? (
          <div className="swiper">
            {display.map((movie, index) => (
              <MovieCard key={index} movie={movie}/>
            ))}
          </div>
        ) : (
          <h5 style={{color: "#fff"}}> Not page found :( </h5>
        )}

      </div>

      <Stack spacing={2} sx={{ alignItems: 'center', margin: '20px 0' }}>
      <Pagination 
        count={Math.floor(total / 10 + 1)} 
        variant="outlined" 
        shape="rounded"  
        size="large"
        page={page} 
        onChange={handleChange}
        sx={{
          '& .MuiPaginationItem-root': {
            color: 'white', // Default color for inactive items
            '&.Mui-selected': {
              backgroundColor: 'primary.main', // Active item background color
              color: 'black', // Active item text color
            },
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.08)', // Hover effect
            },
          },
        }} 
      />
    </Stack>
    </>
  );
};


export default Movies;
