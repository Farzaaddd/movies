import { Routes, Route, Navigate } from "react-router-dom"
import Filter from "../components/pages/Filter"
import Movies from "../components/pages/Movies"
import MovieDetails from "../components/pages/MovieDetails"
import Favorites from "../components/pages/Favorites"
import HomePage from "../components/pages/HomePage"
import NotFound from "../components/pages/NotFound"

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" index element={<HomePage/>}/>
        <Route path="/filter" element={<Filter/>}/>
        <Route path="/movies/:id" element={<MovieDetails/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
  )
}

export default Router