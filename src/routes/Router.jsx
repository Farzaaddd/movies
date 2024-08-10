import { Routes, Route } from "react-router-dom"
import Home from "../components/pages/Home"
import Filter from "../components/pages/Filter"
import Movies from "../components/pages/Movies"
import MovieDetails from "../components/pages/MovieDetails"
// import MovieProvider from "../context/movieContext"
import Favorites from "../components/pages/Favorites"
import HomePage from "../components/pages/HomePage"

const Router = () => {
  return (
    // <MovieProvider>
      <Routes>
        <Route path="/" index element={<Home/>}/>
        <Route path="/home" index element={<HomePage/>}/>
        <Route path="/filter" element={<Filter/>}/>
        <Route path="/movies/:id" element={<MovieDetails/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        {/* <Route path="/auth" element={data ? <Navigate to="/dashboard"/> : <AuthPage/>}/>
        <Route path="/admin" element={data && data.data.role === "ADMIN" ? <AdminPage/> : <Navigate to="/"/>}/>
        <Route path="/:id" element={<PostDetails/>}/>
        <Route path="/*" element={<NotFound/>}/> */}
      </Routes>
    /* </MovieProvider> */
  )
}

export default Router