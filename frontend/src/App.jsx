import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return (
    <>
      <div>
        <MovieCard movie={{title: "Terrifier 3", release_date: "2024"}}/>
      </div>
    </>
  )
}

export default App
