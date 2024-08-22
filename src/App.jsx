import { HashRouter as Routers } from 'react-router-dom';
import Router from "./routes/Router"
import Footer from './layout/Footer';

const App = () => {

  return (
    <Routers>
      <Router/>
      <Footer/>
    </Routers>
  )
}

export default App
