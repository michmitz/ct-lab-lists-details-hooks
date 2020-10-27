import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import HomePage from './HomePage';
import { getCharacters } from '../../services/getCharacters-api'

jest.mock('../../services/getCharacters-api.jsx');

describe('HomePage container', () => {
  it('displays a list of characters on homepage', async() => {
    getCharacters.mockResolvedValue([
      {
        name: 'Michelle',
        description: 'They cut her scenes from X-Files, but she was there',
        image: 'http://placeholder.com/michelle'
      },
    ]);
    render(<HomePage />);

    const characterList = await screen.findByTestId('character-list');
    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
    });
  });
});
