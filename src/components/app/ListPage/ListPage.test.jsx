import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ListPage from './ListPage';

describe('ListPage component', () => {
  afterEach(() => cleanup());
  it('renders ListPage', () => {
    const { asFragment } = render(<ListPage
      characters={[
        {
          name: 'Michelle',
          description: 'They cut her scenes from X-Files, but she was there',
          image: 'http://placeholder.com/michelle'
        }
      ]}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});