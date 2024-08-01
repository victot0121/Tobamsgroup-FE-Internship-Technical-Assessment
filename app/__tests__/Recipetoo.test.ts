import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Recipetoo from '../components/Recipetoo';

test('renders Recipetoo component', () => {
  const { getByText, getAllByAltText } = render(<Recipetoo />);
  
  // Check if the heading is rendered
  expect(getByText('You may like these recipe too')).toBeInTheDocument();

  // Check if the images are rendered
  const images = getAllByAltText(/Imaage \d+/);
  expect(images).toHaveLength(4);
  
  // Check if images have correct src and alt attributes
  images.forEach((image, index) => {
    expect(image).toHaveAttribute('alt', `Imaage ${index + 1}`);
  });
});

