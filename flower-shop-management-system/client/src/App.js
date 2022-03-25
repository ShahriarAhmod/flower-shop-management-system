import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Home from '../src/Components/Home/Home';
import Navbar1 from './Components/Navbar/Navbar1';
import AddFlower from '../src/Components/AddFlower/AddFlower';
import ShowFlowers from '../src/Components/ShowFlowers/ShowFlowers';
import Registration from '../src/Components/Registration/Registration';
import Login from '../src/Components/Login/Login';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar2 from './Components/Navbar/Navbar2';
import Shop from './Components/Shop/Flowers';


function App() {
  return (
    <div className="App">
    {/* <Home></Home> */}
    <Router>
         
        <Navbar1/>
        <Navbar2/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addFlower" element={<AddFlower />} />
          <Route path="/showFlowers" element={<ShowFlowers />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
          
        </Routes>
        </Router>
        <Footer/>
    </div>
  );
}

export default App;
