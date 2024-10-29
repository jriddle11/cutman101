import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from './Home';
import Guide from './Guide';
import Shop from './Shop';
import Gallery from "./Gallery";
import FAQ from './FAQ';
import './App.css';
import NavBarAlt from "./NavBarAlt";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Router>
        <NavBarAlt />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/how" element={<Guide />} />
            <Route exact path="/gallery" element={<Gallery />} />
            <Route exact path="/faq" element={<FAQ />} />
            <Route exact path="/shop" element={<Shop />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
