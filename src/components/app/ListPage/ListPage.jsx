import React from 'react';
import PropTypes from 'prop-types';
import DetailPage from '../DetailPage/DetailPage';

const ListPage = ({ characters }) => {
  const characterlist = characters.map(character => (
    <a key={character.name} href={`/${character.name}`}>
           <DetailPage {...character} />
    </a>
  ));

  return (
    <ul data-testid="character-list">
      {characterlist}
    </ul>
  );
};

ListPage.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default ListPage;
