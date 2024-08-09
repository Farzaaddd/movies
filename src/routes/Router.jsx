import { Routes, Route } from "react-router-dom"
import Home from "../components/pages/Home"
import Filter from "../components/pages/Filter"
import Movies from "../components/pages/Movies"
import MovieDetails from "../components/pages/MovieDetails"

const Router = () => {
  return (
      <Routes>
        <Route path="/" index element={<Home/>}/>
        <Route path="/filter" element={<Filter/>}/>
        <Route path="/movies/:id" element={<MovieDetails/>}/>
        <Route path="/movies" element={<Movies/>}/>
        {/* <Route path="/auth" element={data ? <Navigate to="/dashboard"/> : <AuthPage/>}/>
        <Route path="/admin" element={data && data.data.role === "ADMIN" ? <AdminPage/> : <Navigate to="/"/>}/>
        <Route path="/:id" element={<PostDetails/>}/>
        <Route path="/*" element={<NotFound/>}/> */}
      </Routes>
  )
}

export default Router