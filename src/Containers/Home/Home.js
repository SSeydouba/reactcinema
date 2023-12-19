import "./home.css";
import {useState, useEffect} from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";

const Home = () => {
    const [playing, setPlaying] = useState([]);
    const [popular, setPopular] = useState([]);

    const fetchPlaying = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR&page=1");
        const data = await response.json();
        setPlaying(data.results);
    }

    const fetchPopular = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR&page=1");
        const data = await response.json();
        setPopular(data.results);
    }
 
    useEffect(() => {
        fetchPlaying();
        fetchPopular();
    }, []);

    return (
        <div className="home">
            <section className="home-section">
                <div className="content-title">
                    <h2>En salle de cinéma</h2>
                </div>
                <div className="content-cards">
                    {playing.map((item) => (
                        playing? (
                        <MovieCard  movie={item} />
                        ) : null
                    ))}
                </div>
            </section> 
            <section className="home-section">
                <div className="content-title">
                    <h2>Films populaires</h2>
                </div>
                <div className="content-cards">
                    {popular.map((item) => (
                        popular? (
                        <MovieCard  movie={item} />
                        ) : null
                    ))}
                </div>
            </section> 
        </div>
    );
}
export default Home;                