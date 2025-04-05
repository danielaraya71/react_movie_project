import MovieCard from "../components/MovieCard"
import { useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "Minecraft", release_date: "2025" },
        { id: 2, title: "Her", release_date: "2013" },
        { id: 3, title: "Pulp Fiction", release_date: "1994" },
        { id: 4, title: "Deadpool & Wolverine", release_date: "2024" },
    ]

    const handleSearch = () => {
        
    }

    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for movies" 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                    type="submit" 
                    className="search-button"
                    >Search
                </button>
            </form>

            <div className="movies-grid">
                {movies.map(movie => (
                    movie.title.toLowerCase().startsWith(searchQuery) && (
                        <MovieCard movie={movie} key={movie.id} />
                    )    
                ))}
            </div>
        </div>
    );
}

export default Home