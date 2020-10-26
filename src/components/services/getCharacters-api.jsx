export default function getCharacters() {
  return fetch('https://xfiles-api.herokuapp.com/api/v1/characters?category=Main_characters')
    .then(res => res.json())
    .then(result => result.results.map(character => ({
      name: character.name,
      description: character.description,
      image: character.image
    })))
}
