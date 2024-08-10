import axios from "axios";

const URL = "https://www.omdbapi.com/";
const KEY = "67a71644";

const GetTitle = (title) => axios.get(`${URL}?apikey=${KEY}&i=${title}`);

const GetSearch = (search) => axios.get(`${URL}?apikey=${KEY}&s=${search}`);

const GetPage = ({ search, page }) =>
  axios.get(`${URL}?apikey=${KEY}&s=${search}&page=${page}`);

const GetDetails = (search, season, year, type) =>
  axios.get(
    `${URL}?apikey=${KEY}&s=${search}&season=${season}&y=${year}&type=${type}`
  );

export { GetTitle, GetSearch, GetDetails, GetPage };
