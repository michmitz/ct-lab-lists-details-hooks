import React from 'react'
import PropTypes from 'prop-types';

const DetailPage = ({ name, description, image }) => {
  return <div id="character-details">
        <h2>{name}</h2>
        <p>{description}</p>
        <img src={image}/>
      </div>
}

DetailPage.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default DetailPage;
