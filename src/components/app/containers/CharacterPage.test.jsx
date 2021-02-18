import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterPage from './CharacterPage';
import { getCharacterDetails } from '../../services/getCharacters-api';

jest.mock('../../services/getCharacters-api.jsx');

describe('CharacterPage container', () => {
  it('displays character details', async() => {
    getCharacterDetails.mockResolvedValue([
      {
        name: 'Michelle',
        description: 'They cut her scenes from X-Files, but she was there',
        image: 'http://placeholder.com/michelle'
      }
    ]);
    render(<CharacterPage match={{params: 1}} />);

    const characterDetails = await screen.findByTestId('character-details');
    return waitFor(() => {
      expect(characterDetails).not.toBeEmptyDOMElement();
    });
  });
});