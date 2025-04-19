import { createContext, useState, useContext, useEffect } from "react";

// Create the MovieContext to share state across the app
const MovieContext = createContext()

// Custom hook for easy access to the MovieContext
export const useMovieContext = () => useContext(MovieContext)

// Context provider that manages movie favorites
export const MovieProvider = ({ children }) => {
    // Local state to store favorite movies
    const [favorites, setFavorites] = useState([])

    // On initial render, load favorites from localStorage (if any)
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")
        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    // Update localStorage whenever the favorites list changes
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    // Add a movie to favorites
    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    // Remove a movie from favorites by ID
    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    // Check if a movie is already in favorites
    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    // Context value passed to children
    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )
}