import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar";
import Details from "./pages/Details";
import Footer from "./components/Footer";
import Favorites from "./pages/Favorites";
import WatchList from "./pages/WatchList";
import { React, useState } from "react";
import { createContext } from "react";
import { useSelector } from "react-redux";
import NavModal from "./components/NavModal";

export const ThemeContext = createContext();

function App() {
  const modal = useSelector((state) => state.movies.modalIsOpen);
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  const themeStyles = {
    backgroundColor: darkTheme ? "#141414" : "#fff",
    color: darkTheme ? "#fff" : "#000",
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <BrowserRouter>
        <div style={themeStyles} className="App">
          <NavBar toggleTheme={toggleTheme} />
          {modal && <NavModal />}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/watchlist" element={<WatchList />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
