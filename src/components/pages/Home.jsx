
import { Link } from "react-router-dom"
import Gallery from "../templates/Gallery"
import SearchBox from "../templates/SearchBox"
import { MovieRounded } from "@mui/icons-material"
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import { Button } from "@mui/joy"

const Home = () => {
  return (
    <div>
        <SearchBox/>
        <div style={{textAlign: "center", marginTop: "40px"}}>
          <Button variant="soft" size="sm" sx={{backgroundColor: "#1a1e29", padding:0, px: 2, mr: 2, border: "2px solid #eb8307", '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.08)', // Hover effect
            },}}> 
            <h2> 
              <Link to="home" style={{textDecoration: "none"}}> Go to Homepage </Link> 
              <MovieRounded sx={{verticalAlign: "middle"}}/> 
            </h2>     
          </Button>

          <Button variant="soft" size="sm" sx={{backgroundColor: "#1a1e29", padding:0, px: 2, ml: 2, border: "2px solid #eb8307", '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.08)', // Hover effect
            },}}> 
            <h2> 
              <Link to="favorites" style={{textDecoration: "none"}}> Go to SaveList </Link> 
              <BookmarkOutlinedIcon sx={{verticalAlign: "middle"}}/> 
            </h2>     
          </Button>
        </div>
        <Gallery/>
        {/* <Search/> */}
    </div>
  )
}

export default Home