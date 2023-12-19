import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./Containers/Movie/Movie";
import Header from "./Components/Header/Header";
import Home from "./Containers/Home/Home";
import Actor from "./Containers/Actor/Actor"; // Vous avez importé Actor deux fois
import Similar from "./Containers/Similar/Similar";
// import Footer from "./Components/Footer/Footer";
// import SearchMovies from "./Containers/SearchMovies/SearchMovies";

function App() {
  return (	
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<Movie />} />
        {/* <Route path="/search/:searchterm" element={<SearchMovies />} /> */}
        <Route path="/actor/:actorId" element={<Actor />} />
        <Route path="/similar/:movieId" element={<Similar />} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
