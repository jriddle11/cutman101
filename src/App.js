import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import HowTo from './HowTo';
import Contact from './Contact';
import Gallery from "./Gallery";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Router>
        <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/how" element={<HowTo />} />
            <Route exact path="/gallery" element={<Gallery />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
