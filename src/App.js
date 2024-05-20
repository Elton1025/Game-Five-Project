import './App.css';
import logo from "./images/gfivelogo.png"
import Hero from './components/hero.js';
import {Route,Routes,Link} from 'react-router-dom';
import About from './pages/About.js';
import Contest from './pages/Contest.js';
import Contact from './pages/Contact.js';
import Login from './pages/login.js';

function App() {
  return (
    <div>
    <div className="div-nav">
    
    <nav className="navbar">
                <div className="logo">
                    <h1 className="logoheading" >GameFive</h1>
                    <img src={logo} alt="logo" className="gfivelogo"></img>
                </div>
      <ul className="nav-menu">
        <li>
          <Link to='/' className="nav-links">Home</Link>
          <Link to='/about' className="nav-links">About</Link>
          <Link to='/contest' className="nav-links">Contest</Link>
          <Link to='/contact' className="nav-links">Contact</Link>
          <Link to='/login' className="nav-links">Login</Link>
        </li>
      </ul>
    </nav>
    </div>
    <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contest' element={<Contest/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
