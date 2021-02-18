import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DetailPage from './DetailPage';

describe('DetailPage component', () => {
  afterEach(() => cleanup());

  it('renders DetailPage', () => {
    const { asFragment } = render(<DetailPage
      name='Michelle'
      description='Coolest new X-Files character'
      image='url@url.com'
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});