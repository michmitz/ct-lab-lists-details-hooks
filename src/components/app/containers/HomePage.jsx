import React, { useState, useEffect } from 'react'
import ListPage from '../ListPage/ListPage'
import { getCharacters } from '../../services/getCharacters-api'

const HomePage = () => {
  const [characters, setCharacters] = useState([])
  
  useEffect(() => {
    getCharacters()
      .then(results => setCharacters(results))
  }, []);

  return (
    <ListPage characters={characters} />
  )
}

export default HomePage;
