import { useSelector } from "react-redux";
import FavoritesCard from "../templates/FavoritesCard";

const Favorites = () => {
    const state = useSelector(state => state.movie)
    console.log(state.saveList);
    
  return (
    <div style={{backgroundColor: "#0d0907"}}>
        <h1 style={{margin: "0 10px", padding: "10px 0 10px 25px ", color: "#eb8307", fontWeight: 700, width: "250px", borderRadius: "10px"}}> Favorites: </h1>
        {state.saveList?.map(movie => <FavoritesCard key={movie.imdbID} movie={movie}/>)}
    </div>
  )
}

export default Favorites