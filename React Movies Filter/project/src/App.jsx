import { useEffect, useState } from 'react';
import './App.css';
import Filter from './filter';
import Movie from './Movie';
import { motion, AnimatePresence } from 'framer-motion'

function App() {

  const [popular, setPopular] = useState([])
  const [fitered, setFiltered] = useState([])
  const [activeGenre, setAcitveGenre] = useState(0)
  //for acvite button ... 0 means all 
  // 35 is comeday

  useEffect(() => {
    fetchPopular()
  }, [])

  const fetchPopular = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=a54f115c8c1a7e226a6ad159b36b49a7&language=en-US&page=1")
    const movies = await data.json()
    setPopular(movies.results)
    setFiltered(movies.results)
  }



  return (
    <div className="App">
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setAcitveGenre={setAcitveGenre} />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {fitered.map((movie) => {
            return <Movie key={movie.id} movie={movie} />
          })}
        </AnimatePresence>
      </motion.div>

    </div>
  );
}

export default App;