import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { GetSearch } from '../../services/api';
import Loader from './Loader';

import { FilterAltSharp, Search } from '@mui/icons-material';
import { Button } from '@mui/joy';
import Input from '@mui/joy/Input';

const SearchBox = () => {
  const [search, setSearch] = useState('');
  const { mutate, isLoading } = useMutation(GetSearch);
  const navigate = useNavigate();
  

  const SearchHandler = (e) => {
    e.preventDefault()
    
    mutate(search,  {
      onSuccess: (fetchedData) => {
        // Access the Search property to get the array of results
        const results = fetchedData.data.Search;
        
        if (Array.isArray(results)) {
          // Extracting only serializable parts of results
          const serializableData = results.map(item => ({
            imdbID: item.imdbID,
            title: item.Title,
            year: item.Year,
            poster: item.Poster,
            type: item.Type,
            // Include other properties you need
          }));

          // Navigate to the movies page with the fetched data
          navigate('/movies', { state: { searchResults: serializableData, search: e.target["input-search"].value } });
        } else {
          console.error("Expected an array, but received:", results);
          // Handle the error case (optional)
        }
      },
      onError: (error) => {
        console.error("Error fetching data:", error);
        // Handle error case (optional)
      }
    });
  };

  if (isLoading) return <Loader />;

  return (
    <form style={{ position: 'relative', textAlign: 'center', marginTop: '60px' }} onSubmit={SearchHandler}>
      <Button variant="outlined" color="plain" sx={{ verticalAlign: 'bottom', position: 'absolute', top: '20%', left: '16%', zIndex: 1, backgroundColor: '#1a1e29', minHeight: '0', paddingBlock: '0', paddingInline: '3px 9px', borderRadius: 12}}>
        <FilterAltSharp fontSize="xs" sx={{ fontSize: '22px', color: '#eb8307' }} />
        <Link to="/filter" style={{ textDecoration: 'none', color: '#fff' }}> filter </Link>
      </Button>
      <Input placeholder="Search movies…" name='input-search' variant="outlined" value={search} onChange={(e) => setSearch(e.target.value)} sx={{ width: '70%', display: 'inline-block', borderWidth: '2px', fontSize: '14px', paddingLeft: '80px', paddingTop: '5px', borderRadius: '35px', backgroundColor: '#1a1e29', color: "#fff" ,border: "2px solid #eb8307" }} />
      <Button variant="outlined" color="plain" sx={{ verticalAlign: 'bottom', position: 'absolute', right: '15%' }} type="submit">
        <Search fontSize="xs" sx={{ fontSize: '24px', color: "#eb8307" }} />
      </Button>
    </form>
  );
};

export default SearchBox;
