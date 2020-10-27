import React, { useState, useEffect } from 'react'
import DetailPage from '../DetailPage/DetailPage'
import { getCharacterDetails } from '../../services/getCharacters-api'

const CharacterPage = ({ match }) => {
  const [character, setCharacter] = useState('');
  
  const characterName = match.params.character;

  useEffect(() => {
    getCharacterDetails(characterName)
      .then(results => setCharacter(results[0]))
  }, [characterName]);

  return (
    <DetailPage name={character.name} image={character.image} description={character.description} />
  )
}

export default CharacterPage;