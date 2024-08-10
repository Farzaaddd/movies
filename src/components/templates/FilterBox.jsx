import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { GetDetails } from '../../services/api';

import { Button } from '@mui/joy';
import GrainIcon from '@mui/icons-material/Grain';

import "./FilterBox.css";
import { createQueryObject, getInitialQuery } from '../../helper/helper';

const FilterBox = ({ setDetails }) => {
  const [search, setSearch] = useState('');
  const [season, setSeason] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');

  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  
  const { mutate } = useMutation(({ search, season, year, type }) =>
    GetDetails(search, season, year, type)
  );

  useEffect(() => {
    const initialQuery = getInitialQuery(searchParams);
    setQuery(initialQuery);
    setSearch(initialQuery.search || '');
    setSeason(initialQuery.season || '');
    setYear(initialQuery.year || '');
    setType(initialQuery.type || '');

    if (initialQuery.search) {
      console.log('Fetching data with:', initialQuery);
      mutate(
        { search: initialQuery.search, season: initialQuery.season, year: initialQuery.year, type: initialQuery.type },
        {
          onSuccess: (fetchedData) => {
            console.log('API response:', fetchedData.data.Search);
            setDetails(fetchedData.data.Search);
          },
          onError: (error) => {
            console.error('Error fetching data:', error);
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    setSearchParams(query);
  }, [query]);

  const FilterHandler = (event) => {
    event.preventDefault();

    const newQuery = createQueryObject(query, { search, season, year, type });
    setQuery(newQuery);

    console.log('Triggering API call with:', { search, season, year, type });
    mutate({ search, season, year, type }, {
      onSuccess: (fetchedData) => {
        console.log('API response:', fetchedData.data.Search);
        setDetails(fetchedData.data.Search);
      },
      onError: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  };

  return (
    <form className="filter-form" onSubmit={FilterHandler}>
      <input placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} style={{width: "130px",  borderColor: "#eb8307", backgroundColor: "#1a1e29", fontWeight: 800, textAlign: "center" }} />
      <input className='same' placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} style={{ borderColor: "#eb8307", backgroundColor: "#1a1e29", fontWeight: 800, textAlign: "center" }} />
      <select value={type} onChange={(e) => setType(e.target.value.toLocaleLowerCase())} style={{ borderColor: "#eb8307", backgroundColor: "#1a1e29", color: "grey", fontWeight: 800}} className='same'>
        <option value="Type" selected hidden> Type </option>
        <option value="movie"> Movie </option>
        <option value="series"> Series </option>
      </select>
      <input className='same' placeholder="Season" type="number" min={1} disabled={type === "movie" || type === ""} value={season} onChange={(e) => setSeason(e.target.value)} style={{ borderColor: "#eb8307", backgroundColor: "#1a1e29", color: "grey", fontWeight: 800 }} />

      <Button className='same' variant="outlined" color="neutral" sx={{ verticalAlign: 'bottom', borderWidth: '2px',  borderColor: "#eb8307", backgroundColor: "#1a1e29", color: "grey", fontWeight: 800 ,marginLeft: "5px", '&:active': {
              outline: "none", border: "none" ,backgroundColor: "#1a1e29"
            }, '&:hover': {
              outline: "none", backgroundColor: "#131720"
            },}} type="submit">
        <GrainIcon fontSize="xs" sx={{ fontSize: '22px' }} />
        Filter
      </Button>
    </form>
  );
}

export default FilterBox;
