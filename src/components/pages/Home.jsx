
import { Link } from "react-router-dom"
import Gallery from "../templates/Gallery"
import SearchBox from "../templates/SearchBox"
import { MovieRounded } from "@mui/icons-material"
import { Button } from "@mui/joy"
// import Search from "./Search"

const Home = () => {
  return (
    <div>
        <SearchBox/>
        <div style={{textAlign: "center", marginTop: "40px"}}>
          <Button variant="soft"> 
            <h2> 
              <Link to="home" style={{textDecoration: "none"}}> Go to Homepage </Link> 
              <MovieRounded sx={{verticalAlign: "middle"}}/> 
            </h2>     
          </Button>
        </div>
        <Gallery/>
        {/* <Search/> */}
    </div>
  )
}

export default Home