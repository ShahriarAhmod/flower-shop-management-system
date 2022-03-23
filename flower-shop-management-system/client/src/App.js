import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Home from '../src/Components/Home/Home';
import AddFlower from '../src/Components/AddFlower/AddFlower';
import Navbar from '../src/Components/Navbar/Navbar';
import ShowFlowers from '../src/Components/ShowFlowers/ShowFlowers';
import Registration from '../src/Components/Registration/Registration';
import Login from '../src/Components/Login/Login';
import './App.css';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
    {/* <Home></Home> */}
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addFlower" element={<AddFlower />} />
          <Route path="/showFlowers" element={<ShowFlowers />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/showFlowers" element={<ShowFlowers />} />
        </Routes>
        </Router>
        <Footer/>
    </div>
  );
}

export default App;
