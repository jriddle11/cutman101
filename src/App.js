import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from './Home';
import NavBar from './NavBar';
import Guide from './Guide';
import Contact from './Contact';
import Gallery from "./Gallery";
import FAQ from './FAQ';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Router>
        <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/how" element={<Guide />} />
            <Route exact path="/gallery" element={<Gallery />} />
            <Route exact path="/faq" element={<FAQ />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
